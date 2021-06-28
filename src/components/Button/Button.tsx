import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, primary }) => {
  const classes = classNames(
    styles.btn,
    { [styles.primary]: primary },
  );
  return (
    <button className={classes} type="button" onClick={onClick}>{children}</button>
  );
};
export default Button;
