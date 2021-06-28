import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./LanguageSelect.module.scss";

const LanguageSelect: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentLang, setcurrentLang] = useState("en");
  const langArr = ["en", "ru"];

  const toggleLanguage = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const chooseLanguage = (lang: string) => {
    setcurrentLang(lang);
    toggleLanguage();
  };

  return (
    <div className={styles["select-wrapper"]}>
      <Button onClick={toggleLanguage}>{currentLang}</Button>
      {isSelectOpen && (
        <ul className={styles["language-list"]}>
          {langArr.map((lang) => (
            <li onClick={() => chooseLanguage(lang)}>{lang}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
