import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
            <TwitterIcon className="sidebar-twitterIcon" />
            </Link>
            <Link to='/Summary'>
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            </Link>
            <Link to='/About'>
            <SidebarOption Icon={HomeOutlinedIcon} text="About" to="/About"/>
            </Link>
            <Link to='/Experience'>
            <SidebarOption Icon={BookmarkBorderIcon} text="Experience" />
            </Link>
            <Link to='/Work'>
            <SidebarOption Icon={SearchIcon} text="Work" />
            </Link>
            <Link to='/Contact'>
            <SidebarOption Icon={MailOutlineIcon} text="Contact" />
            </Link>
            <a class="resume-link" href="Resume Nabil Husni Ros.pdf" download="Resume Nabil Husni Ros"><SidebarOption Icon={ListAltIcon} text="Resume" /></a>

            <Button variant="outlined" className="sidebar-tweet" fullWidth>
            Tweet
            </Button>  
        </div>
        
    )
}

export default Sidebar;