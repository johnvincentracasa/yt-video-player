import React from 'react';

function VideoDetail({ video }) {
  if (!video) {
    return <h3>Loading...</h3>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui header">{video.snippet.title}</div>
      <p> {video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
