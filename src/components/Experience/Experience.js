import React from "react";
import "./Experience.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Experience() {

    return (
        <React.Fragment>
        <div className="experience">
            <h3>Experience</h3>
            <div className="box-container">
            <div className="logo">
                <img src="https://media.licdn.com/dms/image/C560BAQElYTl_E5K5zg/company-logo_200_200/0/1616722583884?e=2147483647&v=beta&t=oYi_b5IrRUDtguM8Dhf0cIghGHKjQoFGilpHLGZ2C54" alt="Logo 1" />
            </div>
            <div className="employment-info">
                <p className="fullname">Skill Quotient</p>
                <p className="halfname">Kuala Lumpur, Malaysia</p>
                <p>September 2021 - Present</p>
                <a href="https://www.linkedin.com/company/skill-quotient-resources/" target="_blank" rel="noreferrer"><LinkedInIcon color="primary"/></a>
            </div>
            <div className="description-info">
                <p className="fullname">Software Test Engineer</p>
                <ul>
                    <li>Developed and executed test plans, ensuring that the system met all functional and nonfunctional requirements for Petronas Digital</li>
                    <li>Led the GE-APM project as a single point of contact, resulting in successful implementation and meeting project timelines.</li>
                    <li>Created test scripts and carried out testing, resulting in a high level of system reliability and availability.</li>
                    <li>Prepared and executed User Acceptance Testing (UAT) scripts, ensuring that the system met the needs of end-users.</li>
                </ul>
            </div>
            </div>

            <div className="box-container">
            <div className="logo-medium">
                <img src="https://nmqdigital.com/hs-fs/hubfs/Images/Logo%20Mark%20NMQ%20Digital.png?width=200&height=155&name=Logo%20Mark%20NMQ%20Digital.png" alt="Logo 2" />
            </div>
            <div className="employment-info">
                <p className="fullname">NMQ Digital</p>
                <p className="halfname">Kuala Lumpur, Malaysia</p>
                <p>April 2019 - August 2021</p>
                <a href="https://www.linkedin.com/company/nmq-digital/" target="_blank" rel="noreferrer"><LinkedInIcon color="primary"/></a>
            </div>
            <div className="description-info">
                <p className="fullname">Frontend Developer</p>
                <ul>
                    <li>Utilized HTML, CSS, and Basic JavaScript to design and develop various microsites.</li>
                    <li>Conducted bugs identification and rectification, resulting in smooth go-live of all microsites.</li>
                </ul>
                <br></br>
                <p className="fullname">SharePoint Designer</p>
                <ul>
                    <li>Successfully delivered a major Philips Venture SharePoint design project on time and within set deadlines.</li>
                    <li>Designed and developed various workflow and forms services for SharePoint, improving collaboration and efficiency within the organization.</li>
                </ul>
                <br></br>
                <p className="fullname">Digital Associate</p>
                <ul>
                    <li>Performed web content editing towards delivering quality digital services covering both B2B and B2C.</li>
                    <li>Harnessed the Adobe Experience Manager content management system tool to manage web content services. </li>
                </ul>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Experience;