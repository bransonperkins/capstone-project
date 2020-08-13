import React, {Component} from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import WebSocketComponent from './components/WebSocketComponent';
import './css/messageStyling.css';

class App extends Component {
      render() {
        return (
        <div className="App">
              <UserComponent />
              <WebSocketComponent />
        </div>
      );
    }
}

export default App;
