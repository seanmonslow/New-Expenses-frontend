import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [show, setShow] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="flex flex-row h-screen w-full">
          <div className={"flex flex-col navbar w-40 h-full bg-gray-900" + (show ? "" : " hidden")}>
            <div className="py-3 text-center text-white h-12"></div>
            <button className="py-3 text-center text-white hover:bg-white">Hello</button>
            <button className="py-3 text-center text-white hover:bg-white">Hello</button>
          </div>
          <div class="content flex-1">
            <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
              <div>
                <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={() => setShow(!show)}>
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  </svg>
                </button>
              </div>
              <div>
                <button>Log In</button>
              </div>
            </header>
            <div class="flex flex-row-reverse bg-gray-200">
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
              <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
