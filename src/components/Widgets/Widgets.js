import React from "react";
import "./Widgets.css";
import {
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import { SocialIcon } from 'react-social-icons';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets-widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"1623562364753960960"} />

        <TwitterTweetEmbed tweetId={"785696090460913664"} />


        <div className="follow-button">
        <div><SocialIcon url="https://twitter.com/nabilhusni" target="_blank" />
        </div>
        
        <div>
          <SocialIcon url="https://www.linkedin.com/in/nabil-husni-ros/" target="_blank" />
        </div>
        
        <div>
          <SocialIcon url="https://github.com/nabilhusniros" target="_blank" />
        </div>
      
      </div>
      <footer>
          <small>Build by Nabil Ros &copy;</small>
      </footer>
      </div>
    </div>
  );
}

export default Widgets;