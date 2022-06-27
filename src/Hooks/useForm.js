import React from 'react';

const validateTypes = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Escreva um email válido',
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
    message:
      'A senha precisa ter pelo menos 8 caracteres e ter pelo menos uma letra maiúscula,uma minúscula e um número',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas',
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
      setError('Esse campo é obrigatório');
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
