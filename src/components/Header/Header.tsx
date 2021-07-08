import React from 'react';
import Search from '../Search/Search';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import styles from './Header.module.scss';

interface HeaderProps {
  handleSearch: (query: string) => any;
}

const Header: React.FC<HeaderProps> = ({handleSearch}) => (
  <header className={styles.header}>
    <h1 className={styles.title}>films</h1>
    <Search text='type to search movies...' handleSearch={handleSearch} />
    <LanguageSelect />
  </header>
);

export default Header;
