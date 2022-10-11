import React from "react";
import aboutMeAvatar from "../../assets/aboutMeAvatar.jpg";

function About() {
  return (
    <div className="container">
      <img className="mAvatar" src={aboutMeAvatar} alt="Matt Weber Avatar" />
      <p>
        My career began as a sales engineer and drafter in manufacturing,
        generating proposals, and maintaining engineering standards. Then, the
        company I worked for asked me to create a website for them. I had my own
        small business designing and implementing websites since college; what
        started as a hobby eventually became my career. I think my engineering
        background is perhaps my most important strength in that, at its core,
        all engineering is a recursive loop of strategic planning and data
        analytics with the ultimate goal of solving a complex problem by
        breaking it down into manageable pieces while continuously improving
        processes.
      </p>
      <p>
        I have a coder’s spirit, but because of my extensive non-coding skills
        and abilities, I ended up in several stakeholder or client-facing roles.
        Since my time as a writing tutor in high school, I have always
        gravitated towards writing and mentoring tasks. I have an exceptional
        technical writing ability which helps my written communications be clear
        and concise while managing a project or team.
      </p>
      <p>
        My experience as an AutoCAD drafter and graphic designer have made me
        deft at generating visual aids, like flowcharts, when training staff or
        evangelizing a proposal. My greatest strength is being able to
        communicate well with both technical and business-leaning colleagues. I
        am a skilled instructor who has the patience and people skills to pass
        on my knowledge to others. Because my leadership skills are rooted in
        the concept of leading by example, I can inspire those around me to
        great success.
      </p>
    </div>
  );
}

export default About;
