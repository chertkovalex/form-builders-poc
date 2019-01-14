import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const CustomToggle = ({ options, value, ...props }) => {
  const { enumOptions } = options;
  return (
    <ToggleButtonGroup type="radio" name="options" defaultValue={value}>
      {enumOptions.map(option => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggle;
