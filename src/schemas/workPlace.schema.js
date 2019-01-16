export default {
  type: 'object',
  required: ['jobName', 'weekPercentage', 'annualIncome'],
  properties: {
    jobName: { type: 'string', title: 'What do you do for a living?' },
    weekPercentage: { type: 'number', title: 'Percentage of Week' },
    annualIncome: { type: 'number', title: 'Annual Gross Income' },
    selfEmployed: { type: 'number', title: 'Self Employed' }
  }
};
