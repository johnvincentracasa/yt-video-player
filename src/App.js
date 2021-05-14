import React, { useState, useEffect } from 'react';
import './styles.css';
import Youtube from './apis/youtube';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const handleFormSubmit = async (term = 'cat') => {
    const response = await Youtube.get('/search', {
      params: { q: term },
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    handleFormSubmit();
  }, []);

  if (videos[selectedVideo] === undefined) {
    return 'Loading';
  }

  return (
    <div className="container">
      <Header handleFormSubmit={handleFormSubmit} />

      <VideoPlayer video={videos[selectedVideo]} />
      <VideoList setSelectedVideo={setSelectedVideo} videos={videos} />
    </div>
  );
}
