import React, { Component } from 'react';

import GameTimer from './GameTimer';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2><GameTimer /> </h2>
      </div>
    );
  }
}