import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './components/image';


class App extends Component {
  render() {
    return (
      <div>
        <Image image='https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?cs=srgb&dl=art-artistic-colors-1154198.jpg&fm=jpg' />
      </div>  
    );
  }
}

export default App;
