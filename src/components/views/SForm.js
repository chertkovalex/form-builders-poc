import React from 'react';
import Form from 'react-jsonschema-form';
import WorkPlacesTemplate from '../customFields/WorkPlacesTemplate';
import WorkPlace from '../customFields/WorkPlace';
import ToggleButtons from '../widgets/ToggleButtons';
import Number from '../widgets/Number';
import LayoutGridField from 'react-jsonschema-form-layout-grid';
import ImperialBodyParam from '../customFields/ImperialBodyParam';

const fields = { layout_grid: LayoutGridField, imperial: ImperialBodyParam, workPlace: WorkPlace };

const widgets = {
  toggle: ToggleButtons,
  number: Number
};

const schemaTypes = {
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

const schema = {
  title: 'New income protection quote',
  description: 'Please share some personal details to let us create the best offer for you',
  type: 'object',
  properties: {
    //workPlace: shemaTypes.workPlace,
    aboutYou: {
      type: 'object',
      title: 'About You',
      description: 'Please share some details about yourself',
      dependencies: {
        measureUnits: {
          oneOf: [
            {
              properties: {
                measureUnits: {
                  enum: ['metric']
                },
                metricHeight: {
                  title: 'What is your height?',
                  type: 'number'
                },
                metricWeight: {
                  title: 'What is your weight?',
                  type: 'number'
                }
              }
            },
            {
              properties: {
                measureUnits: {
                  enum: ['imperial']
                },
                imperialHeight: {
                  type: 'object',
                  title: 'What is your height?',
                  properties: {
                    ft: {
                      type: 'number',
                      title: 'ft',
                      suffix: 'ft'
                    },
                    ins: {
                      type: 'number',
                      suffix: 'ins'
                    }
                  }
                },
                imperialWeight: {
                  title: 'What is your weight?',
                  type: 'object',
                  properties: {
                    stone: {
                      suffix: 'stone',
                      type: 'number'
                    },
                    lb: {
                      suffix: 'lb',
                      type: 'number'
                    }
                  }
                }
              }
            }
          ]
        }
      },
      properties: {
        measureUnits: {
          type: 'string',
          title: 'Measurement Units',
          enum: ['metric', 'imperial'],
          enumNames: ['Metric Units', 'Imperial Units'],
          default: 'metric'
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
          items: schemaTypes.workPlace
        }
      }
    }
  }
};

const uiSchema = {
  'ui:rootFieldId': 'journeyform',
  /*  workPlace: {
    'ui:field': 'workPlace',
  },*/
  aboutYou: {
    'ui:field': 'layout_grid',
    'ui:layout_grid': {
      'ui:row': [
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 4, children: ['metricHeight', 'imperialHeight'] } },
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 4, children: ['metricWeight', 'imperialWeight'] } },
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 3, children: ['measureUnits'] } }
      ]
    },
    metricHeight: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Height',
      'ui:widget': 'number',
      'ui:suffix': 'cm'
    },
    metricWeight: {
      'ui:emptyValue': '',
      'ui:placeholder': 'Weight',
      'ui:widget': 'number',
      'ui:suffix': 'kg'
    },
    imperialHeight: {
      'ui:autofocus': true,
      'ui:field': 'imperial'
    },
    imperialWeight: {
      'ui:emptyValue': '',
      'ui:field': 'imperial'
    },

    measureUnits: {
      //'ui:title': ' ',
      'ui:widget': 'toggle'
      //'ui:widget': 'select',
      //'ui:widget': 'radio',
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
    //measureUnits: 'metric'
    imperialHeight: {
      ft: 80,
      ins: 30
    }
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
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
      fields={fields}
      ArrayFieldTemplate={WorkPlacesTemplate}
      widgets={widgets}
    />
  );
};

export default SForm;
