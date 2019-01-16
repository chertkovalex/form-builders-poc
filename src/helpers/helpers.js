// Example function to change an error messages
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
