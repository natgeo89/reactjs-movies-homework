import React from "react";
import styles from "./Tab.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface TabProps {
  active?: boolean;
  label: string;
  handleClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ active, label, handleClick }) => {
  const tabClass = classNames(styles.tab, { [styles.active]: active });
  const labelForRoute = label.replace(/ /g, '_').toLowerCase();

  return (
    <li className={tabClass} onClick={() => handleClick(labelForRoute)}>
      <Link to={`/movies/${labelForRoute}`}>{label}</Link>

      {/* {label}
      </Link> */}
    </li>
  );
};

export default Tab;
