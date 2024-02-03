const customValidationError = (data, requiredFields) => {
  const errors = [];

  requiredFields.forEach((field) => {
    if (!data[field]) {
      errors.push({ path: field, msg: `${field} is required` });
    }
  });

  return errors;
};

export default customValidationError;
