import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E9FDFF] via-[#F4FEFF] to-white">

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 text-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Empower your future with the courses designed to{" "}
          <span className="text-blue-600 relative inline-block">
            fit your choice.
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-300 rounded-full"></span>
          </span>
        </h1>

        
        <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and professional
          goals.
        </p>

        
        <div className="mt-10 flex justify-center">
          <SearchBar />
        </div>
      </div>

    </section>
  );
};


export default Hero;
