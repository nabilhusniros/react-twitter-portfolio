import React from "react";
import './Contact.css';
import Button from '@mui/material/Button';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


function Contact() {
    return (
        
        <div className="title">
        <h3>Contact Me</h3>
        <p>I’m glad you reached out to me! I’m currently looking for any new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <div className="contact-container">
            <RoomOutlinedIcon fontSize="large" />
            <p>Kuala Lumpur, Malaysia</p>
        </div>
        <div className="contact-container">
        <PhoneEnabledOutlinedIcon fontSize="large" />
        <a href="tel:+6018 350 7611"><Button variant="contained" >Connect
        </Button></a>
        </div>
        <div className="contact-container">
        <MailOutlineOutlinedIcon fontSize="large" />
        <a href="mailto: nabilhusnir@gmail.com">
            <Button variant="contained" >Hire Me
        </Button>
      </a>
        </div>
        </div>
    )
}

export default Contact;