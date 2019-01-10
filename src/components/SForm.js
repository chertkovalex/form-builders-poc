import React from 'react';

import Form from 'react-jsonschema-form';

import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

// Define a custom component for handling the root position object
class Job extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props.formData);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return event => {
      this.setState(
        {
          [name]: parseFloat(event.target.value)
        },
        () => this.props.onChange(this.state)
      );
    };
  }

  render() {
    const { jobName, weekPercentage, annualIncome } = this.state;
    return (
      <Row>
        <Col sm={6} md={3}>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="What do you do for a living?"
            placeholder="Enter text"
            value={jobName}
            onChange={this.onChange('jobName')}
          />

          {/*
          <label className="control-label">What do you do for a living?</label>
          <input className="form-control" type="text" value={jobName} onChange={this.onChange('jobName')} placeholder=""/>
*/}
        </Col>
        <Col sm={6} md={3}>
          <label className="control-label">Percentage of Week</label>
          <input
            className="form-control"
            type="number"
            value={weekPercentage}
            onChange={this.onChange('weekPercentage')}
          />
        </Col>
        <Col sm={6} md={3}>
          <label className="control-label">Annual Gross Income</label>
          <input className="form-control" type="number" value={annualIncome} onChange={this.onChange('annualIncome')} />
        </Col>
      </Row>
    );
  }
}

const fields = { job: Job };

const shemaTypes = {
  job: {
    type: 'object',
    required: ['jobName', 'weekPercentage', 'annualIncome'],
    properties: {
      jobName: { type: 'string' },
      weekPercentage: { type: 'number' },
      annualIncome: { type: 'number' }
    }
  }
};

const schema3 = {
  title: 'New income protection quote',
  description: 'Please share some personal details to let us create the best offer for you',
  type: 'object',
  //required: ['firstName', 'lastName'],
  properties: {
    //  job: shemaTypes.job,

    aboutYou: {
      type: 'object',
      title: 'About You',
      description: 'Please share some details about yourself',
      properties: {
        weight: {
          type: 'number',
          title: 'Weight'
        },
        height: {
          type: 'number',
          title: 'Height'
        }
      }
    },
    employment: {
      type: 'object',
      title: 'Your Employment',
      description: 'Please share some details of your occupation',
      properties: {
        weeklyWorkingHours: {
          type: 'number',
          title: 'Weekly work hours'
        },

        workPlaces: {
          type: 'array',
          title: 'List and item level defaults',
          minItems: 1,
          maxItems: 5,
          default: [
            { jobName: 'work1', weekPercentage: 10, annualIncome: 10000 },
            { jobName: 'work2', weekPercentage: 20, annualIncome: 20000 }
          ],
          //default: ['0', 'trout', 'bream'],
          items:
            /*{
            title: 'where work?',
            type: 'number',
            default: '0'
          }*/ shemaTypes.job
        }
      }
    }
    /*
    age: {
      type: 'integer',
      title: 'Age'
    },
    bio: {
      type: 'string',
      title: 'Bio'
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 3
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10
    }*/
  }
};

/*
const schema2 = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name'
    },
    lastName: {
      type: 'string',
      title: 'Last name'
    },
    age: {
      type: 'integer',
      title: 'Age'
    },
    bio: {
      type: 'string',
      title: 'Bio'
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 3
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10
    }
  }
};
*/

const uiSchema = {
  job: { 'ui:field': 'job' },

  aboutYou: {
    weight: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:title': 'What is your weight?',
      'ui:placeholder': 'Weight',
      'ui:widget': 'updown'
    },
    height: {
      'ui:emptyValue': '',
      'ui:title': 'What is your height?',
      'ui:placeholder': 'Height',
      'ui:widget': 'updown'
    }
  },
  employment: {
    weeklyWorkingHours: {
      'ui:emptyValue': '',
      'ui:title': 'How many hours do you work each week?',
      'ui:placeholder': 'Weekly work hours',
      'ui:widget': 'updown'
    },

    workPlaces: {
      // 'ui:options': {
      //   orderable: false
      // },
      'ui:field': 'job'
    }
  }

  /*
  age: {
    'ui:widget': 'updown',
    'ui:title': 'Age of person',
    'ui:description': '(earthian year)'
  },
  bio: {
    'ui:widget': 'textarea'
  },
  password: {
    'ui:widget': 'password',
    'ui:help': 'Hint: Make it strong!'
  },
  date: {
    'ui:widget': 'alt-datetime'
  },
  telephone: {
    'ui:options': {
      inputType: 'tel'
    }
  }*/
};

const formData = {
  job: {
    jobName: 'Top manager',
    weekPercentage: 20,
    annualIncome: 70000
  },

  workPlaces: {
    items: [{ jobName: 'Top manager', weekPercentage: 20, annualIncome: 70000 }]
  } /*{
    'jobName': 'papap'
    0:{
      jobName: 'Top manager1',
      weekPercentage: 10,
      annualIncome: 1000
    },
    1:{
      jobName: 'Top manager2',
      weekPercentage: 20,
      annualIncome: 2000
    },
  }*/
};

const log = type => console.log.bind(console, type);

const SForm = () => {
  return (
    <Form
      schema={schema3}
      uiSchema={uiSchema}
      formData={formData}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
      fields={fields}
    />
  );
};

export default SForm;
