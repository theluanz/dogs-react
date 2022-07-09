import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Error from '../../Helpers/Error/Error';
import styles from './LoginForm.module.css';
import stylesBtn from './../../Forms/Button/Button.module.css';
import Head from '../../Helpers/Head/Head';

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
    <section className="animeLeft">
      <Head title="Login" description="Faça login na rede social Dogs!" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário / Email" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Error error={error && 'Dados Incorretos'} />
        {isLoading ? <Button disabled>Loading...</Button> : <Button>Entrar</Button>}
      </form>
      <Link className={styles.recuperar} to="/login/recuperar">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/cadastrar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
