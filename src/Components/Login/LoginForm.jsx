import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../Context/UserContext';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  const { userLogin, error, isLoading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {error && <p>{error}</p>}
        {isLoading ? <Button disabled>Loading...</Button> : <Button>Entrar</Button>}
      </form>
      <Link to="/login/cadastrar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
