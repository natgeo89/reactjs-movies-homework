import React, { useEffect, useState } from "react";
import { getCurrentLang, setLangToLS } from "../../hooks/language";
import Button from "../Button/Button";
import styles from "./LanguageSelect.module.scss";

const LanguageSelect: React.FC = () => {
  const lang = getCurrentLang();

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentLang, setcurrentLang] = useState(lang);
  const langArr = ["en", "ru"];

  const toggleLanguage = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const chooseLanguage = (lang: string) => {
    setcurrentLang(lang);
    toggleLanguage();
  };

  useEffect(() => {
    setLangToLS(currentLang);
  }, [currentLang]);

  return (
    <div className={styles["select-wrapper"]}>
      <Button onClick={toggleLanguage} className={styles.langBtn}>
        {currentLang}
      </Button>
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
