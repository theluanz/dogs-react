import React from 'react';

const validateTypes = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Write a valid email',
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
    message:
      'Password must be at least 8 characters and contain at least one number, one uppercase and one lowercase letter',
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
