// src/components/About.js
import React from "react";
import Links from "./Links"; // Import the Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" && <p>{props.bio}</p>} {/* Conditional rendering */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} /> {/* Pass links to Links component */}
    </div>
  );
}

export default About;
