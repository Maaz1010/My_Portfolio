import React from "react";
import AboutImg from "../../assets/gptpic2.png";
import { IoArrowForward } from "react-icons/io5";
const Education = () => {
  return (
    <div
      id="Education"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row gap-7 p-0 items-center justify-between">
          <img className="md:h-80 rounded-2xl" src={AboutImg}  alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Sreenivasa Institute of Technology And Management Studies
                </h1>
                
                    <ul className="text-sm md:text-md leading-tight">
                        <li>B.Tech - CSE</li>
                        <li> 2020  - 2024</li>
                        <li> CGPA  - 8.2</li>
                    </ul>
               
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Sri Chaitanya Junior College
                </h1>
                
                     <ul className="text-sm md:text-md leading-tight">
                        <li>CLASS - XII</li>
                        <li>2018  - 2020</li>
                        <li>CGPA  - 9.5</li>
                    </ul>
                
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Keshava Reddy School
                </h1>
                
                     <ul className="text-sm md:text-md leading-tight">
                        <li>CLASS - X</li>
                        <li>2017  - 2018</li>
                        <li>CGPA  - 9.7</li>
                    </ul>
                
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
