import React from 'react';
import classes from './MyButton.module.scss';

const MyButton = ({ children, addClass, ...props }) => {
  const btnClasses = [classes.myBtn];
  btnClasses.push(addClass);

  return (
    <button {...props} className={btnClasses.join(' ')}>
      {children}
    </button>
  );
};

export default MyButton;
