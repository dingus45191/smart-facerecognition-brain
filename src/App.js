import React from 'react';
import './App.css';
import FaceRecognition from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
      
    </div>
  );
}

export default App;
