import React from "react";
import "../styles/Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ReviewIcon from "@material-ui/icons/RateReview";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Toolbar, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <Toolbar position="absolute" className="Navbar">
      <Typography
        variant="h6"
        className="Content"
        onClick={() => {
          window.location = "./";
        }}
      >
        Home
        <HomeIcon className="Icon" />
      </Typography>
      <Typography
        variant="h6"
        className="Content"
        onClick={() => {
          window.location = ".#/about";
        }}
      >
        About
        <InfoIcon className="Icon" />
      </Typography>
      <Typography variant="h6" className="Content">
        Module Review
        <ReviewIcon className="Icon" />
        <div className="dropdown_content">
          <a href=".#/year1" className="dropdown_item">
            Year 1
          </a>
          <a href=".#/year2" className="dropdown_item">
            Year 2
          </a>
        </div>
      </Typography>
      <Typography
        variant="h6"
        className="Content"
        onClick={() => {
          window.location = ".#/project";
        }}
      >
        Projects
        <AccountTreeIcon className="Icon" />
      </Typography>
      <Typography
        variant="h6"
        className="Content"
        onClick={() => {
          window.location = "https://github.com/STrikeNone/";
        }}
      >
        Github
        <GitHubIcon className="Icon" />
      </Typography>
      <Typography
        variant="h6"
        className="Content"
        onClick={() => {
          window.location =
            "https://www.linkedin.com/in/yi-hao-puah-7286b11b8/";
        }}
      >
        LinkedIn
        <LinkedInIcon className="Icon" />
      </Typography>
    </Toolbar>
  );
}

export default Navbar;
