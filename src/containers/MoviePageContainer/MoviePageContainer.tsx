import React, { ReactElement, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ImovieInfo } from "../../types/movie";

import { movieInfo } from "../../__mocks__/movie.mock";
 

interface MoviePageContainerProps {
  children(movieInfo: ImovieInfo, handleSearch: (query: string)=>any): ReactElement;
}

const MoviePageContainer: React.FC<MoviePageContainerProps> = ({ children }) => {
  // const [MovieData, setMovieData] = useState({});
  // const MovieData = MovieData

  const {id}: any = useParams();

  useEffect(() => {
    // const MovieData = await fetchMovieData();
    // setMovieData(MovieData);
    console.log(id)

  });
  const handleSearch = (query: string) => {
    
  }

  return children(movieInfo, handleSearch);
};

export default MoviePageContainer;
