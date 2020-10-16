import React, { Component } from 'react';
import './App.css';
import FaceRecognition from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


class App extends Component {


    constructor(props) {



        super(props);
        const app = new Clarifai.App({
          apiKey: '19ae56794a7340feb52b85b8d56d55bb'
       })
        this.state = {
            input: ''
        }

    }
    onInputChange = (event) => {
        console.log(event.target.value)
    }
  onButtonSubmit() {

    console.log('click');
    this.app.models.predict("d02b4508df58432fbb84e800597b8959",
        "https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg").then(
      function (response) {

      },
      function(err) {

      }
    )
  }
  render() {

    const particleOptions = {
    particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,

      }
        },
        interactivity: {
          onhover: {
            enable: true,
            mode: 'repulse'
        }
      }
  }
  }
  return (
    <div className="App">
      <Particles
        params={particleOptions}
        className='particles'
      />
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm
        onInputChange={this.onInputChange}
        onSubmit={this.onButtonSubmit}
      />
      <FaceRecognition />

    </div>
  );
    }
}

export default App;
