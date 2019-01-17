export default {
  theme: {
    themePath: 'http://127.0.0.1:9000/',
    defaultTheme: 'superhero',
    // defaultTheme: 'paper',
    // defaultTheme: 'spacelab',
  },
  errorMessages: {
    age: {
      required: 'Please enter your age',
    },
    email: {
      format: 'Please enter a valid email address',
    },
    telephone: {
      required: "Don't forget to enter phone number",
      pattern: 'Please enter a valid US telephone number',
    },
  },
  'ui:rootFieldId': 'journeyform',
  /*  workPlace: {
    'ui:field': 'workPlace',
  },*/
  age: {
    'ui:widget': 'number',
    'ui:title': 'Age',
    'ui:suffix': 'years',
  },
  email: {
    'ui:widget': 'email',
    'ui:title': 'E-mail',
  },
  telephone: {
    'ui:widget': 'text',
    'ui:title': 'Phone',
  },
  aboutYou: {
    'ui:field': 'layout_grid',
    'ui:layout_grid': {
      'ui:row': [
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 4, children: ['metricHeight', 'imperialHeight'] } },
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 4, children: ['metricWeight', 'imperialWeight'] } },
        { 'ui:col': { xs: 12, sm: 6, md: 4, lg: 3, children: ['measureUnits'] } },
      ],
    },
    metricHeight: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Height',
      'ui:widget': 'number',
      'ui:suffix': 'cm',
    },
    metricWeight: {
      'ui:emptyValue': '',
      'ui:placeholder': 'Weight',
      'ui:widget': 'number',
      'ui:suffix': 'kg',
    },
    imperialHeight: {
      'ui:autofocus': true,
      'ui:field': 'imperial',
    },
    imperialWeight: {
      'ui:emptyValue': '',
      'ui:field': 'imperial',
    },

    measureUnits: {
      //'ui:title': ' ',
      // 'ui:widget': 'toggle'
      //'ui:widget': 'select',
      'ui:widget': 'radio',
    },
  },
  employment: {
    weeklyWorkingHours: {
      'ui:emptyValue': '',
      'ui:title': 'How many hours do you work each week?',
      'ui:placeholder': 'Weekly work hours',
      'ui:widget': 'updown',
    },
  },
};
