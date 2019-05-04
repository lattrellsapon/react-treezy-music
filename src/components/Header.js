import React, { Component } from 'react';
import Image from '../images/music.png';

export class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>Treezy Beats Production test</h1>
        <img src={Image} id="main-image"/>
      </div>
    )
  }
}

export default Header;
