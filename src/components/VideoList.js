import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className="videos-list ui relaxed divided list">{videosList}</div>
  );
};
export default VideoList;
