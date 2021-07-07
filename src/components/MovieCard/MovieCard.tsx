import React from "react";
import styles from "./MovieCard.module.scss";
import icon from './img/play_icon.svg';

interface MovieCardProps {
  img: string;
  title?: string;
  genres?: string[] | any;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ img, rating, title, genres }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.img_wrapper}>
        <img src={img} className={styles.image} alt={"film"} />
        <img src={icon} width='50px' className={styles.icon} alt={"icon"} />
      </div>
      {title && <div>{title}</div>}
      {genres && <div>{genres.join(" ")}</div>}
    </div>
  );
};
export default MovieCard;
