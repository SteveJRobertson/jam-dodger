import React from 'react';
import Header from './components/Header';
import StatusList from './components/StatusList';
import './App.css';

const App = () => {
  const appTitle = 'JamDodger';

  return (
    <div className="App">
      <Header title={appTitle} />
      <StatusList />
    </div>
  );
};

export default App;
