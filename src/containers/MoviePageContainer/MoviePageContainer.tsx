import React, {FC, ReactElement} from "react";
import { ImovieInfo } from "../../types/movie";

import { movieInfo } from "../../__mocks__/movie.mock";
 

interface MoviePageContainerProps {
  children(movieInfo: ImovieInfo, handleSearch: (query: string)=>any): ReactElement;
}

const MoviePageContainer: FC<MoviePageContainerProps> = ({ children }) => {
  // const [MovieData, setMovieData] = useState({});
  // const MovieData = MovieData

  // useEffect(async () => {
  //   const MovieData = await fetchMovieData();
  //   setMovieData(MovieData);
  // }, []);
  const handleSearch = (query: string) => {
    
  }

  return children(movieInfo, handleSearch);
};

export default MoviePageContainer;
