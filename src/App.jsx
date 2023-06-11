import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import darkBg from './assets/bg-dark.webp';
import lightBg from './assets/bg-light.webp';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context';
import './styles/App.scss';

const App = () => {
  const appBody = document.body;
  const [darkMode, setDarkMode] = useState(false);

  const themeSwitch = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  let bgImage = '';
  if (darkMode) {
    bgImage = darkBg;
    appBody.className = '_dark';
  } else {
    bgImage = lightBg;
    appBody.className = '';
  }

  const date = new Date();
  const hour = date.getHours();

  useEffect(() => {
    hour >= 17 || hour <= 5 ? setDarkMode(true) : setDarkMode(false);
  }, [hour]);

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
        <img id="background" src={bgImage} alt="background" />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
