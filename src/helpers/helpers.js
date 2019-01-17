import parseInt from 'lodash/parseInt';
import forEach from 'lodash/forEach';
import curry from 'lodash/curry';
import get from 'lodash/get';
import { evaluate } from '@sensative/jsep-eval';

const normalizeProperty = prop => prop.replace(/^./, '');

export const generateErrorTransformers = curry((uiSchema, errors) => {
  const { errorMessages } = uiSchema;

  return errors.map(err => {
    const { name, property } = err;
    const propName = normalizeProperty(property);
    const message = get(errorMessages, [propName, name]);

    if (!message) {
      return err;
    }

    return {
      ...err,
      message,
      stack: message,
    };
  });
});

export const validate = curry((uiSchema, formData, errors) => {
  const { validations } = uiSchema;

  forEach(validations, ({ expression, message }, property) => {
    const isValid = evaluate(expression, { ...formData, NUMBER: parseInt });

    if (!isValid) {
      errors[property].addError(message);
    }
  });

  return errors;
});
