import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import './App.css'
import { particlesOptions, app, calculateFaceLocation } from './js/utilities'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
          })
          .then(response => response.json())
          .then(res => {
            console.log('total score:', res)
          })
        }
        this.displayFaceBox(calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  render() {
    const { imageUrl, box } = this.state
    return (
      <div className='App'>
         <Particles className='particles' params={particlesOptions} />
        <div>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      </div>
    )
  }
}

export default App
