import React from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function userLogout() {
      setUser(null);
      setError(null);
      setIsLoggedIn(false);
      setIsLoading(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Invalid token');
          }
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setIsLoading(false);
        }
      } else {
        userLogout();
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await (await fetch(url, options)).json();
    setUser(response);
    setIsLoggedIn(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setIsLoading(true);
      const { url, options } = TOKEN_POST({ username, password });

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: Invalid username or password`);
      }
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError('Error: Invalid username or password');
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, user, error, isLoading, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
