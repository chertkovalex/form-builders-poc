import React from 'react';
import Form from 'react-jsonschema-form';
import WorkPlacesTemplate from './WorkPlacesTemplate';
import WorkPlace from './WorkPlace';
import FieldGroup from './FieldGroup';
import CustomToggle from './CustomToggle';
import LayoutGridField from 'react-jsonschema-form-layout-grid';

const fields = { WorkPlace, FieldGroup, layout_grid: LayoutGridField };

const shemaTypes = {
  workPlace: {
    type: 'object',
    required: ['jobName', 'weekPercentage', 'annualIncome'],
    properties: {
      jobName: { type: 'string', title: 'What do you do for a living?' },
      weekPercentage: { type: 'number', title: 'Percentage of Week' },
      annualIncome: { type: 'number', title: 'Annual Gross Income' },
      selfEmployed: { type: 'number', title: 'Self Employed' }
    }
  }
};

const schema3 = {
  title: 'New income protection quote',
  description: 'Please share some personal details to let us create the best offer for you',
  type: 'object',
  //required: ['firstName', 'lastName'],
  properties: {
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
        },

        measureUnits: {
          type: 'string',
          title: 'Measurement Units',
          enum: ['METRIC UNITS', 'IMPERIAL UNITS']
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
          title: 'List and item level defaults',
          type: 'array',
          minItems: 1,
          maxItems: 5,
          default: [
            { jobName: 'work1def', weekPercentage: 10, annualIncome: 10000 },
            { jobName: 'work2def', weekPercentage: 20, annualIncome: 20000 }
          ],
          items: shemaTypes.workPlace
        }
      }
    }
  }
};

const uiSchema = {
  aboutYou: {
    'ui:field': 'layout_grid',
    'ui:layout_grid': {
      'ui:row': [
        { 'ui:col': { md: 3, children: ['weight'] } },
        { 'ui:col': { md: 3, children: ['height'] } },
        { 'ui:col': { md: 3, children: ['measureUnits'] } }
      ]
    },

    weight: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:title': 'What is your weight?',
      'ui:placeholder': 'Weight',
      //   'ui:field': 'FieldGroup',
      'ui:widget': 'updown'
    },
    height: {
      'ui:emptyValue': '',
      'ui:title': 'What is your height?',
      'ui:placeholder': 'Height',
      'ui:widget': 'updown'
    },

    measureUnits: {
      //'ui:title': ' ',
      'ui:widget': CustomToggle
    }
  },
  employment: {
    weeklyWorkingHours: {
      'ui:emptyValue': '',
      'ui:title': 'How many hours do you work each week?',
      'ui:placeholder': 'Weekly work hours',
      'ui:widget': 'updown'
    }
  }
};

const formData = {
  aboutYou: {
    /*    height: 178,
    weight: 80,*/
    measureUnits: 'METRIC UNITS'
  },
  workPlaces: [
    { jobName: 'work1', weekPercentage: 10, annualIncome: 10000 },
    { jobName: 'work2', weekPercentage: 20, annualIncome: 20000 }
  ],
  job: {
    jobName: 'Top manager',
    weekPercentage: 20,
    annualIncome: 70000
  }
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
      ArrayFieldTemplate={WorkPlacesTemplate}
    />
  );
};

export default SForm;
