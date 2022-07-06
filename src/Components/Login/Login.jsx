import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginCreate from './LoginCreate/LoginCreate';
import { UserContext } from '../../Context/UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound/NotFound';

const Login = () => {
  const { isLoggedIn } = React.useContext(UserContext);
  if (isLoggedIn === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.loginPage}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastrar" element={<LoginCreate />} />
          <Route path="/esqueceu-senha" element={<LoginPasswordLost />} />
          <Route path="/resetar-senha" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
