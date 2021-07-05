import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGenres, IMovieCard, IMoviesResults } from "../../types/movie";
import { RootState } from "../../store";

import { popular, topRated, genres } from "../../__mocks__/movies.mock";
import {
  fetchMovies,
  getMoviesAction,
  MoviesActionType,
  searchMovies,
} from "../../store/actions/movies";

interface MainPageContainerProps {
  children(
    movies: IMovieCard[],
    genres: IGenres,
    handleTabClick: (tab: string) => any,
    handlePaginationChange: (page: number) => any,
    handleSearch: (query: string) => any,
  ): ReactElement;
}

const MainPageContainer: FC<MainPageContainerProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("popular");
  // const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.results);

  const handleTabClick = (tab: string) => {
    const updateTab = tab === "Top rated" ? "top_rated" : tab;
    setActiveTab(updateTab.toLowerCase());
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    // setSearchQuery(query.toLowerCase());
    // console.log(searchQuery)
    dispatch(searchMovies(query.toLowerCase(), 1));
  };

  useEffect(() => {
    dispatch(fetchMovies(activeTab, currentPage));
  }, []);

  useEffect(() => {
    dispatch(fetchMovies(activeTab, currentPage));
  }, [activeTab, currentPage]);


  return children(
    movies,
    genres,
    handleTabClick,
    handlePaginationChange,
    handleSearch
  );
};

export default MainPageContainer;
