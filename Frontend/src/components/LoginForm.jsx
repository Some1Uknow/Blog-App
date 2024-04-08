import { MdComputer } from "react-icons/md";

export default function LoginForm() {
  return (
    <div className="w-screen h-screen flex flex-row justify-between bg-gray-200">
      <div className="flex flex-row justify-center w-1/2 items-center">
        <div className="flex items-center h-screen w-3/4 ">
          <div className="w-full rounded shadow-lg p-8 m-4 bg-white flex flex-col items-center">
            <span className="block w-full text-xl uppercase font-bold mb-4">
              Login
            </span>
            <form
              className="mb-4 w-full flex flex-col items-center"
              action="/"
              method="post"
            >
              <div className="mb-4 w-full">
                <input
                  className="input w-full border-b-2 p-2 outline-none focus:shadow-outline bg-gray-100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                />
              </div>
              <div className="mb-6 w-full">
                <input
                  className="input w-full border-b-2 p-2 outline-none focus:shadow-outline bg-gray-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary w-max px-10">Login</button>
            </form>
            <a className="text-blue-700 text-center text-sm" href="/login">
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover"
          src="./home-bg.jpg"
          alt="Background"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold flex flex-row items-center">
          <MdComputer className="mr-4 mt-2" />
          TechReads
        </h1>
      </div>
    </div>
  );
}
