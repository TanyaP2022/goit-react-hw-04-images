// import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { useState } from 'react';


export default function App() {
  
  const [imageName, setImageName] = useState('');

    return (
      <div className="App">
        <Searchbar onSubmit={setImageName} />
        <ImageGallery imageName={imageName} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
        />
      </div>
  );
};
