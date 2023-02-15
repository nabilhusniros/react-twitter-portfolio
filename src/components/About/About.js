import React from "react";
import "./About.css";


function About() {

    return (
        <React.Fragment>
        <div className="about-me">
            <h3>About Me</h3>
            <p>Hello! My name is Nabil Ros and I would describe my self as a cooperative professional worker. Over the years I have worked in various roles such as Sharepoint Designer, Frontend Developer and Software Test Engineer where the need to colloborate closely with other people.</p>
            <p>Currently, I'm a Frontend Developer in the making. I want to learn and grow in an environment where people want to help each other become better. I would consider myself as a new developer with a passion for learning. I'm excited to start this next chapter and get back to what I love doing: code</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul class="about-tools">
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>Microsoft Azure DevOps</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Agile Methodologies</li>
                <li>APIs</li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default About;