import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import '../styles/Login.css';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  
  return (
    <div className="Login">
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput required type="text" placeholder="Введите логин" />
        <MyInput required type="password" placeholder="Введите пароль" />
        <MyButton addClass="login-btn">Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
