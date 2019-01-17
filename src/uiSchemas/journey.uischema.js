export default {
  theme: {
    themePath: 'http://127.0.0.1:9000/',
    defaultTheme: 'paper',
    // defaultTheme: 'superhero',
    // defaultTheme: 'spacelab',
  },
  'ui:rootFieldId': 'journeyform',
  /*  workPlace: {
    'ui:field': 'workPlace',
  },*/
  /*
    age: {
      'ui:widget': 'number',
      'ui:title': 'Age of person',
      'ui:description': '(earthian year)',
      'ui:suffix': 'years',
    },
  */
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
