import React from 'react';
import classes from './MyModal.module.scss';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        document.body.style.overflow = 'auto';
        setVisible(false);
      }}
    >
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
