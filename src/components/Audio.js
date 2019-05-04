import React, { Component } from 'react';
import sound from '../audios/audio-test.m4a';

export class Audio extends Component {
  render() {
    return (
      <div className="audio">
        <audio src={sound} controls></audio>
      </div>
    )
  }
}

export default Audio;
