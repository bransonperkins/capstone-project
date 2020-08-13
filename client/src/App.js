import React from 'react';
import SpotifyPlayer from './component/SpotifyPlayer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
          <SpotifyPlayer />
        </div>
      </header>
    </div>
  );
}

export default App;
