import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SendSMS from './Forms/SendSMS'

class App extends Component {
  render() {
    console.log("App start");


    return (
      <div className="App">
                  <SendSMS />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit la de dah <code>src/App.js</code> and save to reload.

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
