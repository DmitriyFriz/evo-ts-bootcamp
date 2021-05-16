import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { getMarsRoverPhotos } from './services/marsRover';

console.log(getMarsRoverPhotos(10));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
