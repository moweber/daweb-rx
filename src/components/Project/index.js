import React, { useState } from "react";

const Project = () => {
  const [projects] = useState([
    {
      id: 0,
      name: "React Pathway Portfolio",
      description:
        "This project explored the basics of building a React app and deploying it to GitHub pages.",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
    {
      id: 1,
      name: "Oh Snap",
      description:
        "This was a practice project created while learning React concepts.",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
    {
      id: 2,
      name: "PROJECT NAME",
      description: "PROJECT DESCRIPTION",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
    {
      id: 3,
      name: "PROJECT NAME",
      description: "PROJECT DESCRIPTION",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
    {
      id: 4,
      name: "PROJECT NAME",
      description: "PROJECT DESCRIPTION",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
    {
      id: 5,
      name: "PROJECT NAME",
      description: "PROJECT DESCRIPTION",
      liveLink: "https://moweber.github.io/photo-port/",
      srcLink: "https://github.com/moweber/photo-port",
    },
  ]);

  return (
    <div className="mPortfolio">
      {projects.map((project, i) => (
        <div
          key={project.id}
          style={{
            backgroundImage: `url(${require(`../../assets/projects/${i}.png`)})`,
            WebkitBackgroundSize: "100% auto",
          }}
          className="mProject"
        >
          <div className="mProjectLinks">
            <h2>
              <a target="_blank" rel="noreferrer" href={project.liveLink}>
                {project.name}
              </a>
              <a
                href={project.srcLink}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Icon"
                className="fa fa-github mProjectSrcLink"
              >
                {" "}
              </a>
            </h2>
            <h5>{project.description}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
