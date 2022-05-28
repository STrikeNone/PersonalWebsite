import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import { Typography } from "@material-ui/core";
import Grid from "./Grid";
import InfoIcon from "@material-ui/icons/Info";
import ReviewIcon from "@material-ui/icons/RateReview";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <div class="overall">
      <style>{"body {background-color: #f0f0f5;}"}</style>
      <Navbar />
      <div class="introduction-text">
        <Typography class="large-text">WELCOME!</Typography>
        <Typography class="small-text">
          This is my personal website created entirely in React.Js. It is part
          of my personal project to develop my Software Engineering skills
          further. In this web page you'll be able to view some of my projects
          and personal thoughts on certain modules I have taken throughout
          university so far :P
        </Typography>
      </div>
      <div class="grid-layer">
        <Grid
          title="About"
          link=".#/about"
          icon={
            <InfoIcon
              style={{ fill: "#4360A6", height: "100", width: "100" }}
            />
          }
        />
        <Grid
          title="Module Review"
          link=".#/year1"
          icon={
            <ReviewIcon
              style={{ fill: "#D05B2D", height: "100", width: "100" }}
            />
          }
        />
        <Grid
          title="Projects"
          link=".#/project"
          icon={
            <AccountTreeIcon
              style={{ fill: "#449A76", height: "100", width: "100" }}
            />
          }
        />
      </div>
      <div class="grid-layer2">
        <Grid
          title="GitHub"
          link="https://www.linkedin.com/in/yi-hao-puah-7286b11b8/"
          icon={
            <GitHubIcon
              style={{ fill: "#171515", height: "100", width: "100" }}
            />
          }
        />
        <Grid
          title="LinkedIn"
          link="https://github.com/STrikeNone/"
          icon={
            <LinkedInIcon
              style={{ fill: "#0077b5", height: "100", width: "100" }}
            />
          }
        />
      </div>
    </div>
  );
}

export default Home;
