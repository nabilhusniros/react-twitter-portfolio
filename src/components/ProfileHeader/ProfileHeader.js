import React from "react";
import "./ProfileHeader.css";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ProfileHeader() {

    return (
        <React.Fragment>
        <div className="profileHeader">
            <img class="banner" src="https://pbs.twimg.com/profile_banners/331432760/1674564805/1500x500" alt="Banner"/>
            <img class="profilePicture" src="https://pbs.twimg.com/profile_images/1617868166511890435/pIvYVyrl_400x400.jpg" alt="Profile"/>
        <div className="username">
            <div className="fullname"><p>Nabil Husni Ros</p></div>
            <div className="halfname"><p>@nabilhusni</p></div>
        </div>
        <div className="introduction">
            <p>Web developer with a passion for creating beautiful and intuitive user interfaces. Always learning and experimenting with new technologies</p>
        </div>
        <div className="info">
            <WorkOutlineOutlinedIcon />
            <p>Aspiring Frontend Developer</p>
            <LocationOnOutlinedIcon />
            <p>Kuala Lumpur, Malaysia</p>
        </div>
        </div>
        </React.Fragment>
    )
}

export default ProfileHeader;