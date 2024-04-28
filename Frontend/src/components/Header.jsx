import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between py-5 px-20 bg-gray-100">
        <p className="flex flex-row items-center text-6xl font-bold font-Chakra">
          <MdComputer className="mr-2 text-7xl" />
          TechReads
        </p>
        <div className="flex flex-row gap-4 ">
          <button className="text-black font-normal">
            <Link to="/login">Login</Link>
          </button>
          <Link to="/register">
            {" "}
            <button className="btn m-0 text-white font-normal">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
