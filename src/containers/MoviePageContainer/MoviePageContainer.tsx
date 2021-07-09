import React, { ReactElement, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getMovieDetails } from "../../store/actions/movieDetailsAction";
import { RootState } from "../../store/reducers";
import { ImovieDetails } from "../../types/movie";

// import { movieDetailsMock } from "../../__mocks__/movie.mock";
 

interface MoviePageContainerProps {
  children(movieDetails: ImovieDetails, handleSearch: (query: string)=>any): ReactElement;
}

const MoviePageContainer: React.FC<MoviePageContainerProps> = ({ children }) => {
  // const [MovieData, setMovieData] = useState({});
  // const MovieData = MovieData
  const history = useHistory();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state: RootState) => state.movie);

  const {id}: any = useParams();

  useEffect(() => {
    console.log(id);
    dispatch(getMovieDetails(id));
  }, []);

  const handleSearch = (query: string) => {
    history.push(`/?search=${query}&page=1`);
  }

  return children(movieDetails, handleSearch);
};

export default MoviePageContainer;
