import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import { UserContext } from '../../Context/UserContext';
import NotFound from '../NotFound/NotFound';
import Head from '../Helpers/Head/Head';

const User = () => {
  const { user } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={user.id} />}></Route>
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
