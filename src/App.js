import React from 'react';
import './App.css'
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login/Login';
import { UserStorage } from './UserContext';
import User from './Componentes/User/User';
import ProtectedRoute from './Componentes/Helper/ProtectedRoute';
import Photo from './Componentes/Photo/Photo';
import UserProfile from './Componentes/User/UserProfile';
import NotFound from './Componentes/NotFound';

const App = () => {
  return <div className='App'>
    <BrowserRouter>
    <UserStorage>
    <Header />
    <main className='AppBody'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login/*' element={<Login />} />
      <Route path='conta/*' element={<ProtectedRoute><User/></ProtectedRoute>} />
      <Route path='foto/:id' element={<Photo />} />
      <Route path='perfil/:user' element={<UserProfile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
