import curry from 'lodash/curry';
import get from 'lodash/get';

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
