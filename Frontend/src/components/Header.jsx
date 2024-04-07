import { MdComputer } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-20 bg-gray-100 mb-5">
        <p className="flex flex-row items-center text-4xl font-semibold">
          <MdComputer className="mr-2" />
          TechReads
        </p>
        <div className="flex gap-4 ">
          <button className=" text-black font-normal">Login</button>
          <button className="btn text-white font-normal">Register</button>
        </div>
      </div>
    </>
  );
};

export default Home;
