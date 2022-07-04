import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import { UserContext } from '../../Context/UserContext';

const User = () => {
  const { user } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={user} />}></Route>
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
