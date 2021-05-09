import React from 'react';
import styles from './VideoItem.module.css';

function VideoItem({ video, setSelectedVideo, index }) {
  const onSelect = () => {
    setSelectedVideo(index);
  };

  return (
    <>
      <div className={styles.videoItem} key={index} onClick={onSelect}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </div>
      <h4>{video.snippet.title}</h4>
    </>
  );
}

export default VideoItem;
