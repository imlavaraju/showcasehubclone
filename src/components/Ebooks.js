import React, { useState } from "react";
import "../App.css";

const Ebooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      name: "C-programming",
      text: "Explore C-language programming concepts for building low-level system software and applications.",
    },
    {
      name: "Web Development",
      text: "Explore web development technologies and frameworks for building dynamic and interactive websites.",
    },
    {
      name: "Mobile Development",
      text: "Discover mobile development platforms and tools for creating native and cross-platform mobile applications.",
    },
    {
      name: "Data Science",
      text: "Learn about data analysis, machine learning, and statistical modeling techniques in the field of data science.",
    },
    {
      name: "Cybersecurity",
      text: "Learn about cybersecurity concepts and techniques for protecting systems and networks from cyber attacks.",
    },
    {
      name: "Blockchain",
      text: "Discover blockchain technologies and platforms for building secure and transparent digital transactions.",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Free Ebook Downloads</h1>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
        {filteredCategories.map((category, index) => (
          <div key={index} className="col mb-4">
            <a className="text-decoration-none" href="./ebooks">
              <div className="card h-100 text-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <i className="fas fa-laptop-code mb-3"></i>
                  <h5 className="card-title mb-2">{category.name}</h5>
                  <p className="card-text text-muted">{category.text}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
