import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import img4 from "../assets/images/project-img4.png";
import img5 from "../assets/images/project-img5.png";
import img6 from "../assets/images/project-img6.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Capstone Project",
      description: "Full Stack Development",
      img: img1,
    },
    {
      id: 2,
      title: "Rest API Project",
      description: "This was made with appolo graphql, nodejs, express and mongodb",
      link: "https://github.com/Mehrad72/101332152_COMP3133_Assignment1",
      img: img3,
    },
    {
      id: 3,
      title: "First HTML Project",
      description: "this is my first html/css project at george brown college",
      link: "https://mehrad72.github.io/First-Html-css-Site/",
      img: img4,
    },
    {
      id: 4,
      title: "Data Science Project",
      description: "This was made with java",
      link: "https://github.com/Mehrad72/DSA-Assignment2",
      img: img5,
    },
    {
      id: 5,
      title: "Live Chat App",
      description: "This was built in a day using mongodDB, express, nodejs",
      link: "https://github.com/Mehrad72/101332152_lab_test1_chat_app",
      img: img2,
    },
    {
      id: 6,
      title: "ACD project",
      description: "Done with SQL server and written in C# using .netcore framework",
      link: "https://github.com/Mehrad72/C-Sharp-Site/tree/master",
      img: img6,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Here are a few projects I've worked on when i was in college. I've also worked on a few projects by myself. I'm always looking for new opportunities to learn and grow as a developer.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Extra Info
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            I've also worked on alot of java, c#, python, and javascript projects a couple intro deep learning projects, worked with different frameworks like ASP.net, Spring, Next.js, Apache, Express, and a few more at an intro level.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
