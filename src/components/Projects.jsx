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
      link: "https://quiz-hoot-qgpyjy8bp-jrdc12.vercel.app/",
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
        <div className="flex justify-center items-center gap-4 mt-8 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Extra Info
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Resume
          </button>
          <button
            onClick={() => setDurum(4)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 4 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Philosophy
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
        {durum === 3 ? (
          <div
            id="text3"
            className="tab-pane grid grid-cols-1 gap-4 text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            <div className="bg-blue row-auto rounded-md text-white ">
              <p> Mehrad Heidari</p>
              <p>647-447-4151 </p>
              <p>heydarimehrad@gmail.com </p>
            </div>
            <div className="bg-blue row-auto rounded-md text-white text-lg text-left">
              Objective:
            </div>
            <div className="bg-blue row-auto rounded-md text-white text-left">
              I’m enthusiastic to learn more in this field and get more experience, and I believe as a Junior Web Developer, that Is achievable, I’m certain that I will be of use in this position and can adapt, improvise, and overcome many problems. I wish to design, build, learn, and solve many problems related to this field.
            </div>
            <div className="bg-blue row-auto rounded-md text-left text-white text-lg ">
              My qualifications are:
            </div>
            <div className="bg-blue row-auto rounded-md text-white [&>*]:text-left">
              <p>• Strong knowledge of HTML, CSS, JavaScript, react, nodejs, tailwind, express, mongodDB, and python.</p>
              <p>• Rapid Learning pattern from working with computers everyday </p>
              <p>• Adaptable to quick change </p>
              <p>• Experienced for remote work </p>
              <p>• Teamwork Skills from agile teamwork </p>
              <p>• Independent </p>
              <p>• Substantial Communication skills from big web group projects and agile </p>
              <p>• Strong problem-solving skills </p>
              <p>• Strong time management skills </p>
              <p className="mt-2">Been working with computers for over decade, have experience as a computer technician, both hardware and software, I believe all the years of repairing computers specially software wise, has made me adaptable to variety of problems that I can solve in programming, that otherwise would not have been 	possible.</p>
            </div>
            <div className="bg-blue row-auto rounded-md text-left text-white text-lg ">
              Technical Skills:
            </div>
            <div className="bg-blue row-auto rounded-md text-white text-left">
              <p className="text-lg mb-2">George Brown College, Toronto, ON	September 2021 - June 2023</p>
              <p>Currently learning AGILE, Data Algorithm, and C# ASP. Have many different projects which include: An OOP graduation System in Java, Web application made from scratch no framework, Calculator in Java, an airport reservation System in C#</p>
              <p className="text-lg mb-2 mt-4">Computer Technician Volunteer Infotech Computers, Toronto, ON 2018-2019</p>
              <p>At the company my main job was building computers and fixing or salvaging parts to make a new computer. Occasionally I packaged items, and mass cloned hard drives and solid-state drives.</p>
            </div>
          </div>
        ) : null}
        {durum === 4 ? (
          <div
            id="text4"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            <p className="text-left">As a web developer, I believe that my work is not just about coding and creating websites, but it is also about facilitating the evolution of the digital world. I am motivated by the endless possibilities of the internet and its ability to connect people and ideas across the globe. I believe in my ability to create impactful digital experiences that can change the way people interact with technology.

              My role as a web developer is to be a problem solver and a creative thinker. I strive to approach every project with critical thinking and reflection, considering not just the technical aspects but also the user experience, accessibility, and overall design. I believe that the work I do has the power to make a positive impact on society and to contribute to the advancement of technology.

              Looking towards the future, I am ambitious about continuing to evolve as a web developer and staying up-to-date with the latest technologies and trends. I am excited about the potential of artificial intelligence, virtual reality, and other emerging technologies and look forward to exploring how they can be used to create even more meaningful digital experiences.</p>
          </div>
        ) : null}

      </div>
    </>
  );
}

export default Projects;
