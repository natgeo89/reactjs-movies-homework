import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, primary, className }) => {
  const classes = classNames(
    className,
    styles.btn,
    { [styles.primary]: primary },
  );
  return (
    <button className={classes} type="button" onClick={onClick}>{children}</button>
  );
};
export default Button;
