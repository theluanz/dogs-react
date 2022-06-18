import React from 'react';

const validateTypes = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Write a valid email',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) {
      return true;
    }
    if (value.length === 0) {
      setError('This field is required');
      return false;
    } else if (validateTypes[type] && !validateTypes[type].regex.test(value)) {
      setError(validateTypes[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
