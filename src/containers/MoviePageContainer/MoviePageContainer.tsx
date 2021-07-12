import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentLang } from "../../hooks/language";
import { getActors, getMovieDetails } from "../../store/actions/movieActions";
import { RootState } from "../../store/reducers";
import { IMovieActor, ImovieDetails } from "../../types/movie";

interface MoviePageContainerProps {
  children(
    movieDetails: ImovieDetails,
    movieActors: IMovieActor[],
    handleSearch: (query: string) => any
  ): ReactElement;
}

const MoviePageContainer: React.FC<MoviePageContainerProps> = ({
  children,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state: RootState) => state.movie.details);
  const movieActors = useSelector((state: RootState) => state.movie.actors);

  const { id }: any = useParams();
  const lang = getCurrentLang();

  useEffect(() => {
    dispatch(getMovieDetails(id, lang));
    dispatch(getActors(id, lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query: string) => {
    history.push(`/?search=${query}&page=1`);
  };

  return children(movieDetails, movieActors, handleSearch);
};

export default MoviePageContainer;
