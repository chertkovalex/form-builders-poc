import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Number = ({ options, ...props }) => {
  const { prefix, suffix } = options;

  return (
    <InputGroup>
      {prefix && <InputGroup.Addon>{prefix}</InputGroup.Addon>}
      <FormControl type="number" {...props} onChange={event => props.onChange(event.target.value)} />
      {suffix && <InputGroup.Addon>{suffix}</InputGroup.Addon>}
    </InputGroup>
  );
};

export default Number;
