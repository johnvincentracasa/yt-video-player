import React from 'react';
import styles from './VideoList.module.css';
import VideoItem from '../VideoItem';

const VideoList = ({ videos, setSelectedVideo }) => {
  return (
    <section className={styles.videoList}>
      {videos.map((video, index) => {
        return <VideoItem video={video} setSelectedVideo={setSelectedVideo} index={index} />;
      })}
    </section>
  );
};

export default VideoList;
