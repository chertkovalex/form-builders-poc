import React, { Component } from 'react';
//import './App.css';

//
//
import 'bootstrap';
import 'jquery';
import 'popper.js';
// Import default Bootstrap 4 CSS
//import 'bootstrap/dist/css/bootstrap.css';

//import 'bootswatch/dist/spacelab/bootstrap.css';

//import 'glyphicons-only-bootstrap/css/bootstrap.css';
//import 'glyphicons-halflings/css/glyphicons-halflings.css';

import SForm from './components/SForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SForm />
      </div>
    );
  }
}

export default App;
