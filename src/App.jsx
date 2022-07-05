import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helpers/ProtectedRoute/ProtectedRoute';
import Photo from './Components/Feed/Photo/Photo';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
