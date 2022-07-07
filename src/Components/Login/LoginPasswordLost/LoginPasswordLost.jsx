import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../../api';
import Error from '../../Helpers/Error/Error';

const LoginPasswordLost = () => {
  const login = useForm('login');
  const { data, isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('recuperar', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {isLoading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
