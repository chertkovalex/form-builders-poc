import React, { Component } from 'react';
import SForm from './components/views/SForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;
require('bootstrap');

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
