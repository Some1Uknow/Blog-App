import { useState, useEffect } from "react";
import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        return response.json();
      })
      .then((userInfo) => {
        setUsername(userInfo.username);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, []);

  function LogOut() {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between py-5 px-20 bg-gray-100">
        <p className="flex flex-row items-center text-6xl font-bold font-Chakra">
          <MdComputer className="mr-2 text-7xl" />
          TechReads
        </p>
        {username ? (
          <div className="flex flex-row gap-4 ">
            <button className="text-black font-normal">
              <Link to="/new-post">New Post</Link>
            </button>
            <a onClick={LogOut}>
              <button className="btn m-0 text-white font-normal">Logout</button>
            </a>
          </div>
        ) : (
          <div className="flex flex-row gap-4 ">
            <button className="text-black font-normal">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/register">
              <button className="btn m-0 text-white font-normal">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
