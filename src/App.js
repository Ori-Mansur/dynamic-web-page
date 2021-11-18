import logo from './logo.svg';
import './App.css';

import routes from './data.json';
// import React from 'react';
import React, { useState } from 'react';
import index from './components';


const getNestedPath = (arr, name) => {
  // console.log(arr, name);
  for (const key in arr) {
    // if (Object.hasOwnProperty.call(arr, name)) {
    const item = arr[key];
    if (item.id === name) return `/${key}`;
    if (item.components) {
      const child = getNestedPath(item.components, name);
      if (child) return `${key}${child}`
    }

    // }
  }
};



function App() {
  const [cmps, setCmps] = useState(routes);
  const [text, setVal] = useState('');
  function handleClick(val) {

    if (typeof val.value == 'string') {
      setVal(val.value)
    }
    if (val.value.target_id) {
      var res = getNestedPath(cmps.simulation.children, val.value.target_id)
      res = res.split('/')
      cmps.simulation.children[res[0]].components[res[1]]['text'] = text
      var v = { ...cmps };
      setCmps(v);

    }
  }
  return (
    <div className="App">
      {cmps.simulation.children.map(cmp => index(cmp, cmps.simulation.base_component, handleClick))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
