import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginCreate from './LoginCreate';

const Login = () => {
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
