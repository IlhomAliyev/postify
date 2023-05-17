import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import MyButton from './components/UI/button/MyButton';
import './styles/App.scss';
import { AuthContext } from './context';
import lightBg from './assets/bg-light.webp';
import darkBg from './assets/bg-dark.webp';

const App = () => {
  //! === Page Theme ===

  const appBody = document.body;
  const root = document.getElementById('root');
  const [darkTheme, setDarkTheme] = useState(false);

  const themeSwitch = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  let bgImage = '';
  if (darkTheme) {
    bgImage = darkBg;
    appBody.className = '_dark';
    root.className = '_dark'; //! ===
  } else {
    bgImage = lightBg;
    appBody.className = '';
    root.className = ''; //! ===
  }

  const date = new Date();
  const hour = date.getHours();

  useEffect(() => {
    hour >= 17 || hour <= 5 ? setDarkTheme(true) : setDarkTheme(false);
  }, []);

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
        {isAuth && <Navbar themeSwitch={themeSwitch} />}
        <AppRouter />
        <img id="background" src={bgImage} alt={bgImage} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
