import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import { AuthContext } from './context';
import lightBg from './assets/light-bg.jpg';
import darkBg from './assets/dark-bg.jpg';

const App = () => {
  //! === Page Theme ===

  const appBody = document.body;
  const [darkTheme, setDarkTheme] = useState(false);

  const themeSwitch = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  let bgImage = '';
  if (darkTheme) {
    bgImage = darkBg;
    appBody.className = '_dark';
  } else {
    bgImage = lightBg;
    appBody.className = '';
  }

  const date = new Date();
  const hour = date.getHours();

  useEffect(() => {
    hour >= 18 || hour <= 5 ? setDarkTheme(true) : setDarkTheme(false);
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
        <Navbar />
        <AppRouter />
        <MyButton onClick={() => themeSwitch()} id="themeBtn">
          Theme
        </MyButton>
        <img id="background" src={bgImage} alt={bgImage} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
