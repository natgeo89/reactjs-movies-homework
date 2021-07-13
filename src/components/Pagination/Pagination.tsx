import React from "react";
import classNames from "classnames";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  count: number;
  activePage: string | null;
  handlePaginationChange: (page: number) => any;
}
const Pagination: React.FC<PaginationProps> = ({ count, handlePaginationChange, activePage }) => {
  const maxCount = 5;
  const updateCount = (count > maxCount ) ? maxCount : count;
  const paginationArr = Array.from(Array(updateCount), (updateCount, ind) => ind + 1);
  
  const handleClick = (page: number): void => {
    handlePaginationChange(page);
  };
  
  // if pages less than 2, Pagination is unnecessary
  if (count < 2) return null;
  
  return (
    <ul className={styles.pagination}>
      {paginationArr.map((currentElem) => {
        const isActiveElem = activePage === `${currentElem}`;

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