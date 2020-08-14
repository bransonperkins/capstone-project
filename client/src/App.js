import React from 'react';
import './App.css';
import SpotifyPlayer from './components/SpotifyPlayer';
import UserComponent from './components/UserComponent';
import WebSocketComponent from './components/WebSocketComponent';
import './css/messageStyling.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* Commenting out UserComponent for now.  This was only for testing spring boot and react connectivity */}
            {/* <UserComponent /> */}
            <WebSocketComponent />
        </div>
        <div>
            <SpotifyPlayer />
        </div>
      </header>
    </div>
  );
}

export default App;
