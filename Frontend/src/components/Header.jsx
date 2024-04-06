import { MdComputer } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="flex justify-between py-10 px-40">
        <p className="flex flex-row items-center text-4xl font-semibold">
          <MdComputer className="mr-2" />
          TechReads
        </p>
        <div className="flex gap-4">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </>
  );
};

export default Home;
