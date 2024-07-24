import React, { useState } from "react";
import "../App.css";

const InterviewQuestions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      name: "Java",
      text: "Java is a versatile, object-oriented programming language designed for building platform-independent applications.",
    },
    {
      name: "C programming",
      text: "C is a general-purpose, procedural programming language developed by Dennis Ritchie in 1972.",
    },
    {
      name: "JavaScript",
      text: "JavaScript is a high-level, interpreted programming language that is widely used for front-end and back-end web development.",
    },
    {
      name: "React",
      text: "React is a JavaScript library for building user interfaces, developed by Facebook.",
    },
    {
      name: "Python",
      text: "Python is a high-level, interpreted programming language known for its simplicity and readability.",
    },
    {
      name: "SQL",
      text: "SQL (Structured Query Language) is a standard language for relational database management systems.",
    },
    {
      name: "Rust",
      text: "Rust is a systems programming language focused on safety, speed, and concurrency.",
    },
    {
      name: "Operating Systems",
      text: "Operating systems are the software that manage computer hardware and provide common services for computer programs.",
    },
    {
      name: "Computer Networks",
      text: "Computer networks are the backbone of modern communication, enabling data exchange and resource sharing between devices.",
    },
    {
      name: "Angular",
      text: "AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google for developing single-page applications.",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4" id="interview-categories-container">
      <h1 className="text-center mb-4 display-4">
        Interview Question Categories
      </h1>

      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search domain categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        id="interview-categories-row"
      >
        {filteredCategories.map((category, index) => (
          <div key={index} className="col mb-4">
            <a
              className="text-decoration-none"
              href={`/interview-questions/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="card h-100 shadow-lg border-e rounded-4 category-card">
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <h5 className="card-title text-primary font-weight-bold">
                    {category.name}
                  </h5>
                  <hr />
                  <p className="card-description text-secondary mt-3">
                    {category.text}
                  </p>
                  <p className="card-text mt-3 text-secondary">
                    <small className="text-muted">View Questions</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestions;
