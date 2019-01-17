import converter from './converter';
import update from 'immutability-helper';
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

export const convertFormBodyParams = (newMeasureUnits, formData) => {
  const metricHeightPath = 'aboutYou.metricHeight';
  const metricWeightPath = 'aboutYou.metricWeight';
  const imperialHeightPath = 'aboutYou.imperialHeight';
  const imperialWeightPath = 'aboutYou.imperialWeight';

  let newFormData;
  if (newMeasureUnits === 'metric') {
    const imperialHeight = get(formData, imperialHeightPath);
    const imperialWeight = get(formData, imperialWeightPath);
    const metricHeight = converter.imperialHeightToMetric(imperialHeight);
    const metricWeight = converter.imperialWeightToMetric(imperialWeight);

    newFormData = update(formData, {
      aboutYou: { metricHeight: { $set: metricHeight }, metricWeight: { $set: metricWeight } },
    });
  }
  if (newMeasureUnits === 'imperial') {
    const metricHeight = get(formData, metricHeightPath);
    const metricWeight = get(formData, metricWeightPath);
    const imperialHeight = converter.metricHeightToImperial(metricHeight);
    const imperialWeight = converter.metricWeightToImperial(metricWeight);

    newFormData = update(formData, {
      aboutYou: { imperialHeight: { $set: imperialHeight }, imperialWeight: { $set: imperialWeight } },
    });
  }
  return newFormData;
};
