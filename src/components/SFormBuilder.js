import React from 'react';
import { FormBuilder } from 'react-formio';

const SFormBuilder = () => {
  return (
    <FormBuilder
      form={{ display: 'form' }}
      onChange={schema => console.log(schema)}
    />
  );
};

export default SFormBuilder;
