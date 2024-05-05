import Header from "./Header";
const Home = () => {
  
  return (
    <div className="h-screen">
      <Header />
      <div className="px-10 relative h-full">
        <div
          className="h-4/5 flex items-end justify-start relative"
          style={{
            backgroundImage: 'url("./home-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              The place to share ideas that connect technocrats, inspire
              innovation, and drive technological advancement.
            </h1>
            <p className="text-lg text-white">
              Explore the latest insights, trends, and innovations in the world
              of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
