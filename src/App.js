import React, { Component } from 'react';
import api from './api';
//import './App.css';

//
//
import 'bootstrap';
import 'jquery';
import 'popper.js';
// Import default Bootstrap 4 CSS
//import 'bootstrap/dist/css/bootstrap.css';

//import 'bootswatch/dist/spacelab/bootstrap.css';

//import 'glyphicons-only-bootstrap/css/bootstrap.css';
//import 'glyphicons-halflings/css/glyphicons-halflings.css';

import SForm from './components/views/SForm';

(async () => {
  const contactId = '28';
  const contactData = await api.getContact(contactId);
  const { firstName, lastName } = contactData;
  const { postalCode } = contactData.address;
  const taxCode = await api.getTaxCode(postalCode);
  const experianScore = await api.getExperianScore(firstName, lastName, postalCode);
  const productMetadata = await api.getProdutcMetadata('income_protection');
  const coverData = [{ coverNo: 142, insuredAge: '55', waitingPeriod: '13', sumAssured: 36 }];
  const journeyData = {
    policyStartDate: '2019-01-16T12:24:06.513Z',
    height: '212',
    weight: '212',
    workingHoursPerWeek: '212',
    jobs: 1,
    experianScore: '555',
    taxFramework: '204',
    annualSalary: 21000,
  };
  const employmentData = {
    totalAnnualGrossIncome: 21,
    weeklyWorkingHours: 12,
    jobs: [{ selfEmployed: false, occupation: '2121', percentageOfWeek: '100', annualGrossIncome: 21 }],
  };
  const paymentData = {
    dueDate: '1',
    billingFrequency: 'monthly',
    paymentMethod: 'directDebit',
    accountName: 'accout name',
    accountNo: '1231-2313',
    bankSortCode: '12-31-23',
  };
  const monthlyPremium = await api.calculatePremium(contactId, coverData, journeyData);
  await api.updateContact(contactId, contactData, employmentData);
  const policyId = await api.generateQuote(contactId, coverData, journeyData, paymentData);
  console.log(policyId);
})();

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
