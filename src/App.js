import React, { Component } from 'react';
import './App.css';
import SFormBuilder from './components/SFormBuilder';
import SForm from './components/SForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SFormBuilder />
        <SForm />
      </div>
    );
  }
}

export default App;
