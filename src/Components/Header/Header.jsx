import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as DogsSvg } from '../../assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <DogsSvg />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Cadastrar-se
        </Link>
      </nav>
    </header>
  );
};

export default Header;
