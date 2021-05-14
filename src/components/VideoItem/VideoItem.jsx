import React from 'react';
import { Link } from 'react-scroll';
import styles from './VideoItem.module.css';

function VideoItem({ video, setSelectedVideo, index }) {
  const onSelect = () => {
    setSelectedVideo(index);
  };

  return (
    <Link spy={true} to="videoPlayer">
      <div className={styles.videoItem} key={index} onClick={onSelect}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </div>
      <h4>{video.snippet.title}</h4>
    </Link>
  );
}

export default VideoItem;
