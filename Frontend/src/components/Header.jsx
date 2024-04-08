import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-20 bg-gray-100 mb-5">
        <p className="flex flex-row items-center text-4xl font-semibold">
          <MdComputer className="mr-2" />
          TechReads
        </p>
        <div className="flex gap-4 ">
          <button className="text-black font-normal">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn text-white font-normal"><Link to="/register">Register</Link></button>
        </div>
      </div>
    </>
  );
};

export default Home;
