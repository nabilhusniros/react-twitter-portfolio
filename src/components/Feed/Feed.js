import React from "react";
import "./Feed.css";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function Feed() {
  return(
    <div className="feed">
 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="nabilhusni"
  options={{height: 1000}}
/>
    </div>
  )
}


export default Feed;
