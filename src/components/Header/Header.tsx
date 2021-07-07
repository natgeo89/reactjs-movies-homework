import React from 'react';
import Search from '../Search/Search';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>films</h1>
    <Search text='Movies, person, movie theaters' />
    <LanguageSelect />
  </header>
);

export default Header;
