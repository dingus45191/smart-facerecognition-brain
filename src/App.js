import React, {Component} from 'react';
import './App.css';
import FaceRecognition from './Components/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm';
import Logo from './Components/Logo';
import Navigation from './Components/Navigation';
import Rank from './Components/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';





const app = new Clarifai.App({
    apiKey: '19ae56794a7340feb52b85b8d56d55bb'
});

class App extends Component {


    constructor(props) {



        super(props);

        this.state = {
            input: '',
            imageUrl:''
        }






    }
    onInputChange = (event) => {
        this.setState({ input: event.target.value})
    }
  onButtonSubmit = () => {

   this.setState({ imageUrl: this.state.input});
    app.models
        .predict(
        Clarifai.COLOR_MODEL,
        "https://samples.clarifai.com/face-det.jpg"
        ).then(
      function (response) {
        console.log(response);
      },
      function(err) {
       alert(err);
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
      <FaceRecognition
          imageUrl={ this.state.imageUrl}
      />

    </div>
  );
    }
}

export default App;
