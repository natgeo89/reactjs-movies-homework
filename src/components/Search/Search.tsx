import React, { useState } from "react";
import styles from "./Search.module.scss";
import searchIcon from "./img/search-icon.png";

export interface SearchProps {
  text: string;
  handleSearch: (query: string) => any;
}

const Search: React.FC<SearchProps> = ({ text, handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (query: string) => {
    setValue(query);
  };

  return (
    <form>
      <input
        type="search"
        className={styles.search_field}
        placeholder={text}
        onChange={({ target: { value } }) => handleChange(value)}
        value={value}
      />
      <img
        src={searchIcon}
        className={styles.search_icon}
        alt="search"
        onClick={() => {
          handleSearch(value);
        }}
      />
    </form>
  );
};

export default Search;
