import React, { useState } from "react";
import Tab from "./Tab/Tab";
import styles from "./TabBar.module.scss";

const TabBar: React.FC = () => {
  const tabsArr = ["Popular", "Top rated", "Upcoming"];

  const [activeTab, setActiveTab] = useState(tabsArr[0]);

  const handleClick = (tab: string): void => {
    setActiveTab(tab);
  }

  return (
    <nav className={styles["tabs-wrapper"]}>
      {tabsArr.map((tab, index) => {
        return tab === activeTab ? (
          <Tab key={index} label={tab} active handleClick={handleClick} />
        ) : (
          <Tab key={index} label={tab} handleClick={handleClick} />
        );
      })}
    </nav>
  );
};

export default TabBar;
