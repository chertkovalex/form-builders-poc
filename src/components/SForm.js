import $ from 'jquery';
import 'jquery-ui-sortable';
import React, { Component, createRef } from 'react';
import './styles.css';

window.jQuery = $;
window.$ = $;

require('formBuilder');

const formData = [
  {
    type: 'header',
    subtype: 'h1',
    label: 'formBuilder in React'
  },
  {
    type: 'paragraph',
    subtype: 'p',
    label: 'This is a demonstration of formBuilder running in a React project.'
  },
  {
    type: 'checkbox-group',
    label: 'Checkbox Group',
    name: 'checkbox-group-1546789269845',
    values: [
      {
        label: 'Option 1',
        value: 'option-1',
        selected: true
      },
      {
        label: 'rrr',
        value: 'rrr',
        selected: true
      },
      {
        label: 'ddd',
        value: 'ddd'
      }
    ]
  },
  {
    type: 'button',
    label: 'Button',
    subtype: 'button',
    name: 'button-1546789265907'
  },
  {
    type: 'textarea',
    label: 'Text Area',
    className: 'form-control',
    name: 'textarea-1546789305528',
    subtype: 'textarea'
  },
  {
    type: 'paragraph',
    subtype: 'p',
    label: 'Paragraph'
  }
];

/*
The order of the imports and requires is very important, especially in the online enviornment.
The two jQuery libraries must be imported using Node's require(), and not ES6 import.
Also, these two requires MUST come after setting the global jQuery and $ symbols.

In my Babel/Webpack project, the type and order of the imports is a little less sensitive.
For my project, the following alternative works:

    import $ from 'jquery';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import 'jquery-ui-sortable';

    window.jQuery = $;
    window.$ = $;

    require('formBuilder');
*/

class SForm extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}

export default SForm;
