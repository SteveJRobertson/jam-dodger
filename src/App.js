import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
  render() {
    const appTitle = 'JamDodger';

    return (
      <div className="App">
        <Header title={appTitle} />
        <CardList />
      </div>
    );
  }
}

export default App;
