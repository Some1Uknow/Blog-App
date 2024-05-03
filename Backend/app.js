import express from "express";
import cors from "cors";
import "dotenv/config";
import User from "./schemas/user.js";
import bcrypt from "bcryptjs";
import connectDB from "./utils/mongodb.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import cookieParser from "cookie-parser";
import blogModel from "./schemas/blog.js";


var saltRounds = 10;
const app = express();
const port = 3000;
app.use(cookieParser());
app.use("/uploads", express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

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
            .json({ id: userData._id, username });
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

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logged Out");
});

app.post("/post", upload.single("file"), async (req, res) => {
  const filePath = req.file.path;
  const { title, summary, content } = req.body;
  try {
    const blogData = await blogModel.create({
      title,
      summary,
      content,
      imagePath: filePath,
    });
    res.status(200).json({ message: "File uploaded successfully", blogData });
  } catch (error) {
    console.log("cannot upload blogdata", error);
    res.status(400).json({ message: "Cannot upload blogdata" });
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogPosts = await blogModel.find({});
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

