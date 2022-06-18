import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('');

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetch('http://localhost:8080/api/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/cadastrar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
