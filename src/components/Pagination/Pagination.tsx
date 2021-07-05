import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  count?: number;
  handlePaginationChange: (page: number) => any;
}
const Pagination: React.FC<PaginationProps> = ({ count, handlePaginationChange }) => {
  const paginationArr = Array.from(Array(count), (count, ind) => ind + 1);
  const [activeElem, setActiveElem] = useState(paginationArr[0]);

  const handleClick = (activeElem: number): void => {
    setActiveElem(activeElem);
    handlePaginationChange(activeElem);
  };

  return (
    <ul className={styles.pagination}>
      {paginationArr.map((currentElem) => {
        const isActiveElem = activeElem === currentElem;

        const classes = classNames({
          [styles.elem]: true,
          [styles.active]: isActiveElem,
        });
        return (
          <li
            key={currentElem}
            className={classes}
            onClick={() => handleClick(currentElem)}
          >
            {currentElem}
          </li>
        );
      })}
    </ul>
  );
};
export default Pagination;