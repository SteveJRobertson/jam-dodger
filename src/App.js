import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const headerStyle = {
      borderRadius: 0
    };

    return (
      <div className="App">
        <header className="ui inverted segment" style={headerStyle}>
          <span className="ui white inverted huge header">JamDodger</span>
        </header>
      </div>
    );
  }
}

export default App;
