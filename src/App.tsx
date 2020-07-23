import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullPage from "@fullpage/react-fullpage";

import MainWindow from "./components/MainWindow";

function App() {
  return (
    <ReactFullPage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullPage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullPage.Wrapper>
      );
    }}
  />
  );
}

export default App;
