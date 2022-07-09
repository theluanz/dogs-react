import React from 'react';
import Input from '../../Forms/Input/Input';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import useFetch from '../../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../../api';
import Error from '../../Helpers/Error/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helpers/Head/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password');
  const { request, error, isLoading } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        key: key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <Head title="Resetar senha" />

      <h1 className="title">Resetar senha</h1>
      {login}
      {key}
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="passord" {...password} />
        {isLoading ? <Button disabled>Carregando</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
