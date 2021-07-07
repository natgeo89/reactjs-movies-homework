import React from 'react';
import styles from './Search.module.scss';
import searchIcon from './img/search-icon.png';

export interface SearchProps {
  text: string;
}

const Search: React.FC<SearchProps> = ({ text }) => (
  <form>
    <input type="search" className={styles.search_field} placeholder={text} />
    <img src={searchIcon} className={styles.search_icon} alt="search" />
  </form>
);

export default Search;
