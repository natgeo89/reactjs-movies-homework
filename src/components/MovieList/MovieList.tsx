import React from 'react';
import Search from '../Search/Search';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard';
import { IMovieCard } from '../../types/movie';

// import { genres } from "../../__mocks__/movies.mock";
import {genres} from '../../constants/constants';
import movieDefaultImg from "../../components/MovieCard/img/movieImg.jpg";



interface MovieListProps {
  movies: IMovieCard[];

}

const MovieList: React.FC<MovieListProps> = ({movies}) => (
  <ul className={styles.movies_container}>
              {movies.length === 0
                ? "NO RESULTS FOUND"
                : movies.map(
                    ({ poster_path, vote_average, title, genre_ids, id }, ind) => {
                      const photo = poster_path
                        ? `https://image.tmdb.org/t/p/w1280${poster_path}`
                        : movieDefaultImg;

                      const genresStringArr = genre_ids.map((genre_id) => genres[genre_id]);

                      // if (ind > 19) return null;

                      return (
                        <MovieCard
                          key={ind}
                          rating={vote_average}
                          img={photo}
                          title={title}
                          genres={genresStringArr}
                        />
                      );
                    }
                  )}
            </ul>
);

export default MovieList;
