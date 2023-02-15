import React from "react";
import "./Work.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Work() {

    return (
    <div className="project">
        <h3>Projects</h3>
        <div className="wrapper">    
        <div className="box">
        <div className="name-bold">
            <p>Dino Game</p>
        </div>
        <div className="description">
            <p>A simple browser-based game featuring a running dinosaur.</p>
        </div>
        <div className="actions">
        <Stack spacing={2} direction="row">
            <a href="https://github.com/nabilhusniros/dino-game" target="_blank" rel="noreferrer"><Button variant="contained" size="small">Source Code</Button></a>
            <a href="https://nabil-dino-game.netlify.app/" target="_blank" rel="noreferrer"><Button variant="contained" size="small">Demo</Button></a>
        </Stack>
        </div>
        </div>

        <div className="image-box">
            <img src="https://s3.studytonight.com/curious/uploads/pictures/1631688155-79542.jpg" alt="Dino Game" width="300px" height="220px"/>
        </div>
        </div>
        <div className="reverse-wrapper">
            <div className="box-reverse">
                <div className="name-bold-reverse">
                    <p>Spotify Clone</p>
                </div>
                <div className="description">
                    <p>This project is a clone of the popular music streaming service, Spotify. It was built using HTML, CSS, JavaScript, and the Spotify Web API.</p>   
                </div>
                <div className="actions">
                    <Stack spacing={2} direction="row">
                        <a href="https://github.com/nabilhusniros/spotify-clone" target="_blank" rel="noreferrer"><Button variant="contained" size="small">Source Code</Button></a>
                    </Stack>
                </div>
            </div>
            <div className="image-box-reverse">
            <img src="https://sigmaschool.co/assets/images/coding-intro/project-2a.png" alt="Spotify Clone" width="300px" height="220px"/>
        </div>
        </div>
    </div>
    )
}

export default Work;