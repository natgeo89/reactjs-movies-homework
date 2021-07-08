/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMovieCard } from "../../types/movie";
import { RootState } from "../../store";

import { fetchMovies, searchMovies } from "../../store/actions/movies";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

interface MainPageContainerProps {
  children(
    movies: IMovieCard[],
    handleTabClick: (tab: string) => any,
    handlePaginationChange: (page: number) => any,
    handleSearch: (query: string) => any,
    pages: number,
    page: string | null,
  ): ReactElement;
}

const MainPageContainer: React.FC<MainPageContainerProps> = ({ children }) => {
  //queries
  const activeFilter = useQuery("filter");
  const activePage = useQuery("page");
  const search = useQuery("search");

  const history = useHistory();

  //store
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.results);
  const pages = useSelector((state: RootState) => state.total_pages);

  const handleTabClick = (tab: string) => {
    const filter = tab.replace(/ /g, "_").toLowerCase();
    history.push(`/?filter=${filter}&page=1`);
  };

  const handlePaginationChange = (page: number) => {
    const queryPart = (search === null) ? `filter=${activeFilter}` : `search=${search}`
    history.push(`/?${queryPart}&page=${page}`);
  };

  const handleSearch = (query: string) => {
    history.push(`/?search=${query}&page=1`);
  };

  useEffect(() => {
    const isQueryEmpty = activeFilter === null && search === null && activePage === null;
    if (isQueryEmpty) return;

    if (search === null) {
      dispatch(fetchMovies(activeFilter, activePage));
    } else {
      dispatch(searchMovies(search, activePage));
    }
  }, [activePage, search, activeFilter]);


  useEffect(() => {
    if (activeFilter === null && search === null && activePage === null) {
      history.push("/?filter=popular&page=1");
    }
  }, []);

  return children(
    movies,
    handleTabClick,
    handlePaginationChange,
    handleSearch,
    pages,
    activePage,
  );
};

export default MainPageContainer;
