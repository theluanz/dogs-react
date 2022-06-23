import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import { ReactComponent as IconFeed } from '../../../assets/feed.svg';
import { ReactComponent as IconStats } from '../../../assets/estatisticas.svg';
import { ReactComponent as IconAddNewPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as IconLogout } from '../../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [isMobile, setIsMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end className={({ isActive }) => (isActive ? styles.ativo : undefined)}>
        <IconFeed /> {isMobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.ativo : undefined)}
        to="estatisticas">
        <IconStats />
        {isMobile && 'Estátisticas'}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.ativo : undefined)} to="postar">
        <IconAddNewPhoto />
        {isMobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <IconLogout />
        {isMobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
