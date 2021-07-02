import React, {FC, ReactElement} from "react";
import { IGenres, IMoviesResults } from "../../types/movie";


import { popular, topRated, genres } from "../../__mocks__/movies.mock";

 

interface MainPageContainerProps {
  children(results: IMoviesResults, genres: IGenres): ReactElement;
}

const MainPageContainer: FC<MainPageContainerProps> = ({ children }) => {
  // const [MainData, setMainData] = useState({});
  // const MainData = MainData

  // useEffect(async () => {
  //   const MainData = await fetchMainData();
  //   setMainData(MainData);
  // }, []);
  

  return children(popular, genres);
};

export default MainPageContainer;
