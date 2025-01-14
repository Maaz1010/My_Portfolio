import React from "react";
import ProjectCard from "./ProjectCard";
import proj1 from "../../assets/Spring boot 1.png"
import proj2 from "../../assets/React 1.jpeg"
import imgstock from "../../assets/Project Stock.jpeg"
import proj3 from "../../assets/image3.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Employee CRUD"
          main="A Spring Boot application implementing CRUD operations on employee entity using REST APIs and tested using Postman."
          imgp={proj1}
        />
        <ProjectCard
          title="Plan My Trip"
          main="A travel planning system designed using react to help users organize their trips effectively with customized itineraries and streamlined management."
          imgp={proj2}
        />
        <ProjectCard
          title="Virtual Mouse Project"
          main="A computer vision-based virtual mouse system utilizing OpenCV and Python for hands-free control."
          imgp={proj3}
        />
        <ProjectCard
          title="Cars Go"
          main="A Java-based car rental management system showcasing Object-Oriented Programming principles for efficient booking and administration"
          imgp={imgstock}
        />
      </div>
    </div>
  );
};

export default Projects;
