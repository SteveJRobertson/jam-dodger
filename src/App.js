import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import './App.css';

const App = () => {
  const appTitle = 'JamDodger';

  return (
    <div className="App">
      <Header title={appTitle} />
      <CardList />
    </div>
  );
};

export default App;
