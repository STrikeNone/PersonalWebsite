import React from "react";
import Navbar from "./Navbar";
import "../styles/About.css";
import profile from "../img/profile.jpg";

function About() {
  return (
    <div className="About">
      <style>{"body {background-color: #f0f0f5;}"}</style>
      <Navbar />
      <div className="textBorder">
        <img src={profile} alt="" className="profile" />
        <div className="textDisplay">
          <text className="headerText">Hi! I'm Yi Hao :D</text>
          <text className="contentText">
            {" "}
            A year 3 student pursuing a Bachelor of Science in Data Science and
            AI at NTU. I am currently exploring my career options through
            various internships. I would describe myself as a helpful and
            sociable person
          </text>
          <text className="contentText">
            {" "}
            My current CCA is the SCSE Club Community Development portfolio
            which focuses on CIP that is something I enjoy and find meaning in{" "}
          </text>
          <div className="category">
            <h5 className="education-header">Education</h5>
            <li className="education-text">
              2021 - Ongoing: Nanyang Technological University -- CGPA: 4.94
            </li>
            <li className="education-text">
              {" "}
              2016 - 2017: St Andrews Junior College -- 90 Rank Points{" "}
            </li>
            <li className="education-text">
              2012 - 2015: Maris Stella High School -- L1R5 10{" "}
            </li>
          </div>
          <div className="category">
            <h5 className="education-header">Experience</h5>
            <li className="education-text">
              Computer Vision/Data Science Intern - DSO National Laboratories
              (May 21 - Jul 21)
            </li>
            <li className="education-text">
              {" "}
              Data Science Intern - Centre For Strategic Infocomm Technology
              (May 22 - Jul 22)
            </li>
            <li className="education-text">
              Data Science Intern (Upcoming) - ByteDance, TikTok (Aug 22 - Jan
              23)
            </li>
          </div>
          <div className="category">
            <h5 className="skills">Skills</h5>
            <p className="skills-text">
              Python, C/C++, Java, MER(N)N stack, SQL(MySQL/PostgreSQL/MSSQL),
              Machine Learning, Computer Vision
            </p>
          </div>
          <div className="category">
            <h5 className="skills">Others</h5>
            <p className="skills-text">
              Uni notes:{" "}
              <a
                href="https://drive.google.com/drive/folders/1TKm-WrIipy9DSt7olbG_56s4yhQ_bqyU?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                google-drive
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
