import React from 'react';
import * as MUI from 'material-ui';
import { Aztec } from 'react-aztec';

const formData = [
  {
    id: "name",
    type: 'textfield',
    props: {
      id: 'name',
      floatingLabelText: 'Hello, Whats your name?',
      hintText: 'Name is required'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory', //email, lowercase, mobile
          message: 'Name is required!!' // on error message to be displayed
        }
      ]
    }
  }
];

class SForm extends React.Component {
  render() {
    return (
      <div>
        <Aztec
          guid="unique-id"
          data={formData}
          library={MUI}
        />
      </div>
    )
  }
}
export default SForm;
