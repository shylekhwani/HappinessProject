import bgImg from "../assets/bgimg.jpg";

const Explore = () => {
  return (
   <div className="relative w-full h-screen">
      <img
        src={bgImg}
        alt="Travel Background"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center bg-black/30">
        <div className="text-left p-8 md:p-20 max-w-xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Explore the World <br /> Like Never Before
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Discover breathtaking destinations, vibrant cultures, and unforgettable adventures. Your journey starts here.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-500 transition">
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
