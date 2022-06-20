import React from 'react';
import { UserContext } from '../../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = React.useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
