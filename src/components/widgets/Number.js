import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Number = ({
  autofocus,
  disabled,
  formContext,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  rawErrors,
  readonly,
  registry,
  required,
  schema,
  value,
  ...props
}) => {
  const { prefix, suffix } = options;
  return (
    <InputGroup>
      {prefix && <InputGroup.Addon>{prefix}</InputGroup.Addon>}
      <FormControl
        autoFocus={autofocus}
        disabled={disabled}
        id={id}
        onBlur={onBlur}
        onChange={event => onChange(event.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        type="number"
        {...props}
        value={value}
      />
      {suffix && <InputGroup.Addon>{suffix}</InputGroup.Addon>}
    </InputGroup>
  );
};

export default Number;
