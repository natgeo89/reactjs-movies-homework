import React from "react";
import styles from "./MovieCard.module.scss";

interface MovieCardProps {
  img: string;
  title: string;
  genres: string[];
}

const MovieCard: React.FC<MovieCardProps> = ({ img, title, genres }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} className={styles.image} alt={"film"} />
      <div>{title}</div>
      <div className={styles.genres}>
        {genres.join(' ')}
      </div>
    </div>
  );
};
export default MovieCard;
