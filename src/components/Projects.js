import React, { useState } from "react";
import "../App.css";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      lang: "React",
      text: "Discover projects built with React. Enhance your skills in creating dynamic web applications using this popular JavaScript library.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    },
    {
      lang: "Rust",
      text: "Discover projects and tutorials on Rust. Learn this systems programming language known for its safety, speed, and concurrency.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      lang: "Angular",
      text: "Explore projects and tutorials on Angular. Ideal for developers looking to master this powerful web framework.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    },
    {
      lang: "Python",
      text: "Start with simple Python projects perfect for beginners. Learn the basics of this versatile programming language.",
      level: "Beginner",
      gradient: "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
    },
    {
      lang: "JavaScript",
      text: "Explore JavaScript projects ranging from basic scripts to complex applications. Enhance your web development skills.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    },
    {
      lang: "Node.js",
      text: "Discover projects related to Node.js. Perfect for learning server-side development and building scalable applications.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    },
    {
      lang: "Java",
      text: "Access a variety of Java projects suitable for all levels. Master Java, a versatile language used in various applications.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
    },
    {
      lang: "React Native",
      text: "Delve into mobile development with React Native. Build cross-platform mobile apps for both iOS and Android.",
      level: "Beginner to Advanced",
      gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    },
  ];

  const filteredProjects = projects.filter((proj) =>
    proj.lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 font-weight-bold">
          Explore free simple projects across different domains.
        </h1>
      </div>

      <div className="mb-5 text-center">
        <h3 className="mb-4 project-heading">Find Your Perfect Project</h3>

        <div className="search-container">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="Search by language..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3g-4">
        {filteredProjects.map((proj, index) => (
          <div key={index} className="col mb-4 project-col">
            <a className="text-decoration-none" href="./projects">
              <div
                className="card h-100 project-card"
                style={{ background: proj.gradient }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fs-5 mb-3 text-dark">
                    {proj.lang}
                  </h5>
                  <p className="card-text mb-4">{proj.text}</p>
                  <p className="card-text mb-4">
                    <strong>Difficulty Level:</strong> {proj.level}
                  </p>
                  <div className="text-center">
                    <button className="btn btn-light btn-sm px-4 py-2 rounded-pill">
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
