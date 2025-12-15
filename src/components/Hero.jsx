import React from "react";
import video1 from "../assets/video1.mp4";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 flex flex-col items-center my-6 md:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
        VirtualR is a free and open-source platform that provides developers
        with tools to create virtual reality (VR) applications and experiences.
      </p>

      <div className="flex justify-center my-10 space-x-8">
        <a
          href="#"
          className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 flex-col md:justify-center md:space-x-8 md:space-y-0 md:flex-row items-center space-y-8">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
