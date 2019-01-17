import workPlace from './workPlace.schema';

export default {
  title: 'New income protection quote',
  description: 'Please share some personal details to let us create the best offer for you',
  type: 'object',
  required: ['age', 'telephone'],
  properties: {
    age: {
      type: 'integer',
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 5,
    },
    telephone: {
      type: 'string',
      pattern: '^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$',
    },
    coolField: {
      type: 'string',
    },
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
                  enum: ['metric'],
                },
                metricHeight: {
                  title: 'What is your height?',
                  type: 'number',
                },
                metricWeight: {
                  title: 'What is your weight?',
                  type: 'number',
                },
              },
            },
            {
              properties: {
                measureUnits: {
                  enum: ['imperial'],
                },
                imperialHeight: {
                  type: 'object',
                  title: 'What is your height?',
                  properties: {
                    ft: {
                      type: 'number',
                      title: 'ft',
                      suffix: 'ft',
                    },
                    ins: {
                      type: 'number',
                      suffix: 'ins',
                    },
                  },
                },
                imperialWeight: {
                  title: 'What is your weight?',
                  type: 'object',
                  properties: {
                    stone: {
                      suffix: 'stone',
                      type: 'number',
                    },
                    lb: {
                      suffix: 'lb',
                      type: 'number',
                    },
                  },
                },
              },
            },
          ],
        },
      },

      properties: {
        measureUnits: {
          type: 'string',
          title: 'Measurement Units',
          enum: ['metric', 'imperial'],
          enumNames: ['Metric Units', 'Imperial Units'],
          default: 'metric',
        },
      },
    },
    employment: {
      type: 'object',
      title: 'Your Employment',
      description: 'Please share some details of your occupation',
      properties: {
        weeklyWorkingHours: {
          type: 'number',
          title: 'Weekly work hours',
        },
        workPlaces: {
          title: 'List and item level defaults',
          type: 'array',
          minItems: 1,
          maxItems: 5,
          default: [
            { jobName: 'work1def', weekPercentage: 10, annualIncome: 10000 },
            { jobName: 'work2def', weekPercentage: 20, annualIncome: 20000 },
          ],
          items: workPlace,
        },
      },
    },
  },
};
