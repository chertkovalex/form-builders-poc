import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const ToggleButtons = ({ options, value, ...props }) => {
  const { enumOptions } = options;
  return (
    <ToggleButtonGroup type="radio" name="options" defaultValue={value} {...props}>
      {enumOptions.map(option => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
