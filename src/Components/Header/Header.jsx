import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as DogsSvg } from '../../assets/dogs.svg';
import { UserContext } from '../../Context/UserContext';

const Header = () => {
  const { user } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <DogsSvg />
        </Link>
        {user ? (
          <Link to="/conta" className={styles.login}>
            {user.name}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Cadastrar-se
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
