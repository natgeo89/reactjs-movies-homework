import React, {FC, ReactElement} from "react";

import { movieInfo } from "../../__mocks__/movie.mock";

interface ImovieInfo {
  backdrop_path: string ;
  revenue: number;
  overview: string;
  release_date: string;
  genres: {id: number; name: string;}[];
  runtime: number | null;
  title: string;
}

interface MoviePageContainerProps {
  children(movieInfo: ImovieInfo): ReactElement;
}

const MoviePageContainer: FC<MoviePageContainerProps> = ({ children }) => {
  // const [MovieData, setMovieData] = useState({});
  // const MovieData = MovieData

  // useEffect(async () => {
  //   const MovieData = await fetchMovieData();
  //   setMovieData(MovieData);
  // }, []);
  

  return children(movieInfo);
};

export default MoviePageContainer;
