// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import InterviewQuestionns from "./components/InterviewQuestionns";
import Ebooks from "./components/Ebooks";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewquestions" element={<InterviewQuestionns />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
