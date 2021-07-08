import React from "react";
import styles from "./Tab.module.scss";
import classNames from "classnames";

interface TabProps {
  active?: boolean;
  label: string;
  handleClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ active, label, handleClick }) => {
  const tabClass = classNames(styles.tab, { [styles.active]: active });

  return (
    <li className={tabClass} onClick={() => handleClick(label)}>
      {label}
    </li>
  );
};

export default Tab;
