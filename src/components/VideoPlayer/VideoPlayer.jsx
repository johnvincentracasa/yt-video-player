import React from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ video: { snippet, id } }) => {
  const videoUrl = `https://www.youtube.com/embed/${id.videoId}`;

  console.log(snippet);

  return (
    <section id="videoPlayer" className={styles.videoPlayer}>
      <div className={styles.videoPlayerContainer}>
        <iframe title="Youtube_video_playing" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className={styles.videoPlayerDetail}>
        <h2>{snippet.title}</h2>
        <h3>BY : {snippet.channelTitle}</h3>
        <p>{snippet.description}</p>
      </div>
    </section>
  );
};

export default VideoPlayer;
