import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelect }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div className="item video-item" onClick={() => onSelect(video)}>
      <img src={thumbnails.medium.url} alt="{title}" className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
