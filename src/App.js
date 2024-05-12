import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchPhotos("initial"); // Load initial images on component mount
  }, []);

  const fetchPhotos = async (query) => {
    try {
      const response = await unsplash.get('/search/photos', {
          params: { query: query, page: 1, per_page: 30 } // Requesting 30 items per page
      });
      setImages(response.data.results); // Assuming results are in response.data.results
    } catch (error) {
      console.error('Error fetching photos', error);
    }
  };

  return (
    <div className="app">
      <Header onSubmit={fetchPhotos}/>
      <MainBoard images={images} />
    </div>
  );
}

export default App;
