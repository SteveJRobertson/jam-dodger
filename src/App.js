import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    const appTitle = 'JamDodger';
    return (
      <div className="App">
        <Header title={appTitle} />
      </div>
    );
  }
}

export default App;
