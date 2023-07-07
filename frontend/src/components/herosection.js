import React from "react";
import { BsArrowRight } from "react-icons/bs";
import video from "../images/vedio.mp4";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="relative w-full h-full flex justify-start bg-gradient-to-t from-black via-transparent to-black overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="text-white absolute w-full h-full object-cover object-left sm:object-center opacity-70"
        />

        {/* :HERO MAIN CONTAINER */}
        <div className="relative py-28 xl:py-40 mx-10 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">
          {/* ::Hero title & text */}
          <div className="mx-5 md:mx-0 p-8 rounded-xl   bg-gray-800 bg-opacity-50 text-white shadow-2xl">
            <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">
              Formidable, <br />
              <span className="text-yellow-400 text-opacity-80">
                Fancy Hero 8
              </span>{" "}
              est <br />
              Formidable !
            </h1>
            <p className="mt-3 text-gray-100 font-firacode">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              blanditiis in asperiores optio est, id, temporibus perspiciatis
              ratione ipsam quam tempore aliquam distinctio repudiandae iusto
              facilis, consequatur eligendi illum quos.
            </p>
          </div>

          {/* ::Hero button */}
          <button className="relative m-5 w-full md:w-2/3 lg:w-2/5  mx-5 border justify-center border-white rounded-lg px-4 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
            <Link to="/books">
              <span className="relative -top-0.5 mr-2">Explore</span>
            </Link>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
