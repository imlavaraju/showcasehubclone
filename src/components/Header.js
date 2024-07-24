import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoSkype } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <IoLogoSkype style={{ width: "40px", height: "40px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link to="/" className="nav-link active">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/interviewquestions" className="nav-link">
            Interview Questions
          </Link>
          <Link to="/ebooks" className="nav-link">
            Ebooks
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
