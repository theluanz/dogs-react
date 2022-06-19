import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../Context/UserContext';

const Login = () => {
  const { isLoggedIn } = React.useContext(UserContext);
  console.log(isLoggedIn);
  if (isLoggedIn === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/cadastrar" element={<LoginCreate />} />
        <Route path="/esqueceu-senha" element={<LoginPasswordLost />} />
        <Route path="/resetar-senha" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
