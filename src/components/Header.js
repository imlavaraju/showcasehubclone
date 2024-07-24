import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoSkype } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <IoLogoSkype style={{ width: "40px", height: "40px" }} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="./" class="nav-link active">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link to="./projects" class="nav-link">
            Projects
          </Link>
          <Link to="./interviewquestions" class="nav-link">
            InterviewQuestionns
          </Link>
          <Link to="./ebooks" class="nav-link ">
            Ebooks
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
