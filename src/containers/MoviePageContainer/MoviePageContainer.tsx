import React, {FC, ReactElement} from "react";
import { ImovieInfo } from "../../types/movie";

import { movieInfo } from "../../__mocks__/movie.mock";
 

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
