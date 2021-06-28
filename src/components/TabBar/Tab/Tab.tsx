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
    <div className={tabClass} onClick={() => handleClick(label)}>
      {label}
    </div>
  );
};

export default Tab;
