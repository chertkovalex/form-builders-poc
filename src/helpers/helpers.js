// Example function to change an error messages
import get from 'lodash/get';
import converter from './converter';
import update from 'immutability-helper';

export const transformErrors = errors => {
  return errors.map(error => {
    if (error.name === 'required') {
      const missingMessage = 'should not be empty';
      const stack = `${error.params.missingProperty} ${missingMessage}`;
      return { ...error, stack };
    }
    return error;
  });
};

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
