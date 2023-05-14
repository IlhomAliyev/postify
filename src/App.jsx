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
  // const date = new Date();
  // const hour = date.getHours();

  // hour >= 18 || hour <= 5
  //   ? (document.body.className = '_dark')
  //   : (document.body.className = '');

  const appBody = document.body;
  const [darkTheme, setDarkTheme] = useState(false);

  // const [bodyTheme, setBodyTheme] = useState((document.body.className = ''));
  // const [bgImage, setBgImage] = useState('./assets/light-bg.jpg');

  const themeSwitch = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
    // document.body.className !== '_dark'
    //   ? setBodyTheme((document.body.className = '_dark'))
    //   : setBodyTheme((document.body.className = ''));
  };

  let bgImage = './assets/light-bg.jpg';

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

  // document.body.classList.contains('_dark')
  //   ? setBgImage('./assets/dark-bg.jpg')
  //   : setBgImage('./assets/light-bg.jpg');

  // useEffect(() => {
  //   themeSwitch();
  // }, [bodyTheme]);

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
