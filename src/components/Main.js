import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Main = () => {
  const stats = [
    { count: "1000+", text: "Projects Available" },
    { count: "2000+", text: "Active Users" },
    { count: "500+", text: "Contributionns Made" },
    { count: "300+", text: "Community Made" },
    { count: "2000+", text: "Interview Questions" },
    { count: "1000+", text: "Ebooks" },
  ];

  const points = [
    {
      h1: "Learn",
      p1: "Explore projects and ebooks to learn new technologies, frameworks, and best practices.",
    },
    {
      h1: "Contribute",
      p1: "Find projects and ebooks where you can contribute and collaborate with other developers and authors.",
    },

    {
      h1: "Showcase",
      p1: "Showcase your own projects and ebooks to the world and get feedback from the community.",
    },

    {
      h1: "Interview Questions",
      p1: "Prepare for your next job interview with our comprehensive collection of interview questions.",
    },
  ];
  return (
    <div className="container">
      <div className="row align-items-center vh-90">
        <div className="col-md-7 text-center ">
          <h1
            className=" font-weight-bold mb-4"
            style={{
              opacity: 1,
              willChange: "auto",
              transform: "none",
            }}
          >
            {`Welcome to`}
            <span className="text-success">
              <strong> ShowcaseHub</strong>
            </span>
          </h1>

          <p className="lead mb-4">
            Discover and explore projects, ebooks, and interview questions
            categorized by various domains.
          </p>
          <p className="mb-4">
            ShowcaseHub is a platform where you can find a variety of projects,
            ebooks, and interview questions ranging from frontend to backend,
            mobile apps to web applications, and much more.
          </p>
          <div className="container">
            <Link
              to="/projects"
              className="btn btn-success btn-lg m-2"
              role="button"
              href="/projects"
            >
              Explore Projects
            </Link>
            <Link
              className="btn btn-success btn-lg m-2"
              role="button"
              to="/ebooks"
            >
              Explore Ebooks
            </Link>
            <Link
              className="btn btn-success btn-lg m-2"
              role="button"
              to="/interviewquestions"
            >
              Explore InterviewQuestionns
            </Link>
            <Link
              className="btn btn-outline-secondary btn-lg m-2"
              role="button"
              to="/"
            >
              Become a Partner
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img
            src="https://showcasehub.tech/assets/College-Student-BVxPNEuH.png"
            className="img-fluid"
            alt="Hero Illustration"
          />
        </div>
      </div>
      <div className="container text-center my-5">
        <h2 className="mb-4">Our Impact</h2>
        <div className="row">
          {stats.map((stat) => (
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h3 className="font-weight-bold">{stat.count}</h3>
                <p>{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row text-center mt-5">
        {points.map((point) => (
          <div className="col-md-3 mb-4 ">
            <div className="icon-box">
              <h2 className="font-weight-bold">{point.h1}</h2>
              <p>{point.p1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
