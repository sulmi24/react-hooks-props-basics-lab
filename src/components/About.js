import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links
        github={"https://github.com/sulmi24"}
        linkedin={"https://www.linkedin.com/in/a-sulmi24/"}
      />
    </div>
  );
}

export default About;
