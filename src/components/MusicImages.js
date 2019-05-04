import React, { Component } from 'react';
import img from '../images/music.png';

export class MusicImages extends Component {
  render() {
    return (
    <div className="container">
         <div className="grid">
        <div>
            <div className="grid-content">
                <h3>Cash Money</h3>
                <img src={img} alt=""/>
            </div>
        </div>
        <div>
            <div className="grid-content">
                <h3>Young Money</h3>
                <img src={img} alt=""/>
            </div>
        </div>
        <div>
            <div className="grid-content">
                <h3>Baby</h3>
                <img src={img} alt=""/>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MusicImages;
