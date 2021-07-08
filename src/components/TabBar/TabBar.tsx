import React, { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Tab from "./Tab/Tab";
import styles from "./TabBar.module.scss";

interface TabBarProps {
  handleTabClick: (tab: string) => {};
  // activeTab: string;
}

const TabBar: React.FC<TabBarProps> = ({ handleTabClick }) => {
  const tabsArr = ["Popular", "Top rated", "Upcoming"];
  const tabs: {[key: string]: string} = {
    popular : "Popular",
    top_rated : "Top rated",
    upcoming : "Upcoming",
  }
  const queryTab = useQuery('filter');

  const [activeTab, setActiveTab] = useState('');

  const handleClick = (tab: string): void => {
    handleTabClick(tab);
  };

  useEffect(()=>{
    if (queryTab !== null){
      setActiveTab(tabs[queryTab])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTab])

  return (
    <nav>
      <ul className={styles["tabs-wrapper"]}>
        {tabsArr.map((tab, index) => {
          return tab === activeTab ? (
            <Tab key={index} label={tab} active handleClick={handleClick} />
          ) : (
            <Tab key={index} label={tab} handleClick={handleClick} />
          );
        })}
      </ul>
    </nav>
  );
};

export default TabBar;
