import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
  


function App() {
  return (
    <div className="App">
        <Particles  className='particles'
          params={particlesOptions} 
        />
      <Navigation />
      <Logo />
      <ImageLinkForm />
        {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
