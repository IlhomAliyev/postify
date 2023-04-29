import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import { AuthContext } from './context';

const App = () => {
  //! === Page Theme ===
  const date = new Date();
  const hour = date.getHours();

  const [bodyTheme, setBodyTheme] = useState();
  hour >= 18 || hour <= 5
    ? (document.body.className = '_dark')
    : (document.body.className = '');

  const themeSwitch = () => {
    document.body.className === '_dark'
      ? setBodyTheme((document.body.className = ''))
      : setBodyTheme((document.body.className = '_dark'));
  };

  useEffect(() => {
    themeSwitch();
  }, [bodyTheme]);
  //! === Page Theme ===

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <MyButton onClick={() => themeSwitch()} id="themeBtn">
          Theme
        </MyButton>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
