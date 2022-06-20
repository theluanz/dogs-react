import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import { USER_POST } from '../../../api';
import { UserContext } from '../../../Context/UserContext';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helpers/Error/Error';

const LoginCreate = () => {
  const username = useForm('');
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = React.useContext(UserContext);
  const { isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        await userLogin(username.value, password.value);
      }
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Error error={error} />
        {isLoading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
      </form>
    </section>
  );
};

export default LoginCreate;
