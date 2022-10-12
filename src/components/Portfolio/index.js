import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <section className="container">
      <p className="text-center">
        Thanks for checking out my portfolio.
        <br />
        Click on the project title to visit the live site or the GitHub icon to
        visit the source code public repository.
      </p>
      <Project />
    </section>
  );
}

export default Portfolio;
