import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    const appTitle = 'JamDodger';
    return (
      <div className="App">
        <Header title={appTitle} />

        <div className="ui container">
          <div className="column">
            <div class="ui cards">
              <div className="card jd-card">
                <div className="content">
                  <img
                    className="right floated mini ui image"
                    src="https://www.placecage.com/35/35"
                  />
                  <div className="header">NicholasCage</div>
                  <div className="meta">5 minutes ago</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus eu varius leo, nec feugiat felis. Etiam non
                    iaculis urna, eget tincidunt sed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
