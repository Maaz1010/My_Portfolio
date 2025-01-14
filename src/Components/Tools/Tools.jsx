import React from "react";
import { FaJava } from "react-icons/fa6";
import { FaCss3,  FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiMysql, SiMongodb, SiSpringboot, SiPostman } from "react-icons/si";

 
const Tools = () => {
  return (
    <div id="Tools" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Software's Known</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#e61c29" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpringboot color="green" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="yellow" size={50}  />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#e69812" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostman color="orange" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAdobephotoshop color="#61DAFB" size={50} />
          </span>
        </div>
       
      </div>
    </div>
  );
};

export default Tools;
