import React, { useState } from "react";
import styles from "./Search.module.scss";
import searchIcon from "./img/search-icon.png";

export interface SearchProps {
  text: string;
  handleSearch: (query: string) => any;
}

const Search: React.FC<SearchProps> = ({ text, handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {value}} = e;
    setValue(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    handleSearch(value);
  };


  const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(value);
    }
  };



  return (
    <form>
      <input
        type="search"
        className={styles.search_field}
        placeholder={text}
        onChange={handleChange}
        onKeyPress={handlePressKey}
        value={value}
      />
      <img
        src={searchIcon}
        className={styles.search_icon}
        alt="search"
        onClick={handleClick}
      />
    </form>
  );
};

export default Search;
