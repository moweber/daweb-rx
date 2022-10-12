import React from "react";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <section className="container mResume">
      <p>
        Click <a href={resume}>here</a> to download a PDF version of my full
        resume.
      </p>
      <h1>Skills</h1>
      <ul className="mResumeSkills">
        <li>Web Development</li>
        <li>Project Management</li>
        <li>Database Management</li>
        <li>Support Management</li>
        <li>Enterprise Content Management</li>
        <li>Application Development</li>
        <li>User / Customer Experience</li>
        <li>User / Staff Training</li>
        <li>Software Testing</li>
        <li>Technical Writing</li>
        <li>Process Workflows</li>
        <li>Data Reporting</li>
      </ul>
      <h1>Software</h1>
      <ul className="mResumeSoftware">
        <li>CSS/HTML</li>
        <li>Java/JavaScript</li>
        <li>SQL Server/MySQL</li>
        <li>UNIX</li>
        <li>Python</li>
        <li>AWS</li>
        <li>PHP</li>
        <li>Android</li>
        <li>PostgreSQL</li>
        <li>C#</li>
        <li>DNN</li>
        <li>SharePoint</li>
        <li>Django</li>
        <li>WordPress</li>
        <li>Power Automate</li>
        <li>REST APIs</li>
        <li>Salesforce</li>
        <li>jQuery/Ajax</li>
        <li>Node.js</li>
        <li>React/JSX</li>
        <li>M365/Office</li>
        <li>JetBrains</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Visual Studio</li>
        <li>VS Code</li>
        <li>Power BI</li>
      </ul>
    </section>
  );
}

export default Resume;
