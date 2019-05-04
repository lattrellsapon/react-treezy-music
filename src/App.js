import React, { Component } from 'react';
import Header from './components/Header';
import Audio from './components/Audio';
import MusicImages from './components/MusicImages';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Audio />
        <About />
        <MusicImages/>
        <Footer />
      </div>
    )
  }
}

export default App;

