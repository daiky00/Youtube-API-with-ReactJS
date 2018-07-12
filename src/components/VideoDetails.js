import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div className="details">
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;