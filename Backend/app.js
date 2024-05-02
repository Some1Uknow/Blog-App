import express from "express";
import cors from "cors";
import "dotenv/config";
import User from "./schemas/user.js";
import bcrypt from "bcryptjs";
import connectDB from "./utils/mongodb.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

var saltRounds = 10;
const app = express();
const port = 3000;
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const userData = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error registering:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userData = await User.findOne({ username: username });
  if (!userData) {
    return res.status(400).json({ message: "Invalid username or password" });
  }
  bcrypt.compare(password, userData.password, function (err, result) {
    if (result == true) {
      console.log("Login DONE");
      jwt.sign(
        { username, id: userData._id },
        process.env.JWT,
        {},
        (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
          }
          res
            .cookie("token", token)
            .status(200)
            .json("Login was a success (backend)");
        }
      );
    } else {
      console.log(err);
      res.status(400).json({ message: "Invalid username or password" });
    }
  });
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }
  jwt.verify(token, process.env.JWT, {}, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(200).json(info);
  });
});

app.post("/logout", (req, res)=> {
  res.cookie('token', '').json("Logged Out");
})