import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    const appTitle = 'JamDodger';
    const post = {
      avatarUrl: 'https://www.placecage.com/35/35',
      username: 'NicholasCage',
      time: '5 mins ago',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu varius leo, nec feugiat felis. Etiam non iaculis urna, eget tincidunt sed.`
    };
    return (
      <div className="App">
        <Header title={appTitle} />

        <div className="ui container">
          <div className="column">
            <div className="ui cards">
              <Card post={post} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
