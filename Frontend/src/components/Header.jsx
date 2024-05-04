import { useContext, useEffect } from "react";
import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../Provider";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUser(userInfo);
      });
    });
  }, []);

  console.log(user);

  function logOut() {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUser(null);
  }

  const username = user?.username;

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
              <Link to="/create">Create New Post</Link>
            </button>
            <button className="bg-black p-3 rounded-lg m-0 text-white font-normal" onClick={()=> logOut()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-row gap-4 ">
            <button className="text-black font-normal">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/register">
              <button className="btn m-0 text-white font-normal">Register</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;