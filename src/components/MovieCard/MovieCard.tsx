import React from "react";
import styles from "./MovieCard.module.scss";
import icon from './img/play_icon.svg';
import { Link } from "react-router-dom";

interface MovieCardProps {
  img: string;
  id: number;
  title?: string;
  genres?: string[] | any;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ img, rating, title, genres, id }) => {
  return (
    <Link to={`/movie/${id}`} className={styles.card_wrapper}>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.img_wrapper}>
        <img src={img} className={styles.image} alt={"film"} />
        <img src={icon} width='50px' className={styles.icon} alt={"icon"} />
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {genres && <div className={styles.genres}>{genres.join(" ")}</div>}
    </Link>
  );
};
export default MovieCard;
