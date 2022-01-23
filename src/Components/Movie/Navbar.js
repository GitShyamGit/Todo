import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return <div style={{display:'flex',padding:0.5}}>
        <h1>Movie</h1>
        <h4 style={{marginLeft:'2rem',marginTop:'1.5rem'}}>Favourites</h4>
    </div>;
  }
}
