/* eslint-disable no-unused-expressions */
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
            imageUrl:'',
            box:{}
        }


    }
  calculateFaceLocation = (data) => {

      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputimage')
      const width = Number(image.width)
      const height= Number(image.height)

      return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol:width - (clarifaiFace.right_col *width),
          bottomRow: height  -(clarifaiFace.bottom_row *height)

      }
    }
    displayFaceBox= (box)=>{
        console.log(box)
        this.setState({box: box})
    }
    onInputChange = (event) => {
        this.setState({ input: event.target.value})
    }
  onButtonSubmit = () => {

   this.setState({ imageUrl: this.state.input});
    app.models
        .predict(
        Clarifai.FACE_DETECT_MODEL,
            this.state.input
    ).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch((err) => {
          console.log(err)
          alert(`Couldn't detect face due to some error. This site only detects image of one person so if there were multiple persons in image it will catch error.Only image files uch as jpg or png in link are supported.`)

    })


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
          box={this.state.box}
          imageUrl={ this.state.imageUrl}
      />

    </div>
  );
    }
}

export default App;
