import React from "react";
import wave from "../context/wave.png";
import boat from "../context/boat.png";
import move from "../context/move.png";
import crew from "../context/crew.png";
import arrow from "../context/arrow.png";
import frame from "../context/frame.png";
import framew from "../context/framew.png";
import minute from "../context/minute.png";
import camera from "../context/camera.png";
import movie from "../context/movie.png";
import plane from "../context/plane.png";
import head from "../context/head.png";
import care from "../context/care.png";
import get from "../context/get.png";
import ques from "../context/ques.png";
import ask from "../context/ask.png";
import way from "../context/way.png";
import last from "../context/last.png";
import boatt from "../context/boatt.png";

const MidSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 px-6 md:px-16 gap-10">
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
          <span className="text-sm bg-white rounded-full px-3 py-1 w-max mx-auto md:mx-0">
            The Leader Among Leaders
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Ride the <span className="text-orange-500">Wave of Leadership</span>{" "}
            with <span className="underline decoration-blue-400">Luca.</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            A fun animated series for IT pros who want to lead with skill (and
            stoke).
          </p>

          <div className="flex gap-4 items-center justify-center md:justify-start">
            <button className="flex items-center gap-2 bg-white border border-black rounded-full px-5 py-2 hover:bg-gray-100 transition text-sm md:text-base">
              <img src={wave} className="h-6 w-6" />
              Watch the Series
            </button>
          </div>
        </div>

        <div>
          <img src={boat} className="h-60 md:h-80" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-20 px-6 md:px-16 gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={move} className="max-w-[150px] md:max-w-none" />
          <div className="flex items-center">
            <img src={crew} className="max-w-[80px] md:max-w-none" />
            <img src={arrow} className="w-[50px] h-[40px] md:w-[70px] md:h-[50px]" />
          </div>
        </div>
        <div>
          <img src={frame} className="max-w-[200px] md:max-w-none" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mt-20 px-6 md:px-16 gap-6">
        <div className="flex items-center gap-4">
          <img src={camera} className="w-12 md:w-auto" />
          <img src={minute} className="w-12 md:w-auto" />
        </div>
        <div>
          <img src={movie} className="max-w-[250px] md:max-w-none" />
        </div>
      </div>


      <div className="flex flex-col justify-between items-center mt-20 px-6 md:px-16 gap-6">
        <img src={framew} alt="" />
        <img className="mr-96" src={plane} alt="" />
      </div>
      <div className="flex flex-col justify-between items-center mt-20 px-6 md:px-16 gap-6">
        <img src={head} alt="" />
        <img src={care} alt="" />
        <img src={get} alt="" />
      </div>
       <div className="flex flex-col justify-between items-center mt-20 px-6 md:px-16 gap-6">
        <img src={ques} alt="" />
        <img src={ask} alt="" />
        <img src={way} alt="" />
      </div>
       <div className="flex flex-col justify-between items-center mt-20 px-6 md:px-16 gap-6">
        <img src={boatt} alt="" />
        <img src={last} alt="" />
      </div>
    
    </div>
  );
};

export default MidSection;
