import React from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard";
import { IMovieCard } from "../../types/movie";

import { genres } from "../../constants/constants";
import movieDefaultImg from "../../components/MovieCard/img/movieImg.jpg";
import { getCurrentLang } from "../../hooks/language";

interface MovieListProps {
  movies: IMovieCard[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const lang = getCurrentLang();
  return (
    <ul className={styles.movies_container}>
      {movies.length === 0 ? (
        <div className={styles.no_results}>no results found</div>
      ) : (
        movies.map(({ poster_path, vote_average, title, genre_ids, id }) => {
          const photo = poster_path
            ? `https://image.tmdb.org/t/p/w1280${poster_path}`
            : movieDefaultImg;

          const genresStringArr = genre_ids.map(
            (genre_id) => genres[genre_id][lang]
          );

          return (
            <MovieCard
              key={id}
              id={id}
              rating={vote_average}
              img={photo}
              title={title}
              genres={genresStringArr}
            />
          );
        })
      )}
    </ul>
  );
};
export default MovieList;
