import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import { ReactComponent as IconFeed } from '../../../assets/feed.svg';
import { ReactComponent as IconStats } from '../../../assets/estatisticas.svg';
import { ReactComponent as IconAddNewPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as IconLogout } from '../../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const isMobile = useMedia('(max-width: 40rem)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen && styles.mobileButtonActive
          }`}></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          isMobileMenuOpen && styles.navMobileActive
        }`}>
        <NavLink
          to="/conta"
          end
          className={({ isActive }) => (isActive ? styles.ativo : undefined)}>
          <IconFeed /> {isMobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink
          to="estatisticas"
          className={({ isActive }) => (isActive ? styles.ativo : undefined)}>
          <IconStats />
          {isMobile && 'Estátisticas'}
        </NavLink>
        <NavLink to="postar" className={({ isActive }) => (isActive ? styles.ativo : undefined)}>
          <IconAddNewPhoto />
          {isMobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <IconLogout />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
