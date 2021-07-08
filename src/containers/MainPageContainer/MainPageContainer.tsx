/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMovieCard } from "../../types/movie";
import { RootState } from "../../store";

import {
  fetchMovies,
  searchMovies,
} from "../../store/actions/movies";

interface MainPageContainerProps {
  children(
    movies: IMovieCard[],
    handleTabClick: (tab: string) => any,
    handlePaginationChange: (page: number) => any,
    handleSearch: (query: string) => any,
    isLoading: boolean,
    pages: number,
    page: number,
  ): ReactElement;
}

const MainPageContainer: React.FC<MainPageContainerProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("popular");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //store
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.results);
  const pages = useSelector((state: RootState) => state.total_pages);
  const page = useSelector((state: RootState) => state.page);

  const handleTabClick = (tab: string) => {
    const updateTab = tab === "Top rated" ? "top_rated" : tab;
    setActiveTab(updateTab.toLowerCase());
    setCurrentPage(1);
    setSearchQuery('');
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    setIsLoading(true);
    if (searchQuery === "") {      
      dispatch(fetchMovies(activeTab, currentPage));
    } else {
      setCurrentPage(1);
      dispatch(searchMovies(searchQuery, currentPage));
    }
    setIsLoading(false);
  }, [currentPage, searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMovies(activeTab, currentPage));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMovies(activeTab, currentPage));
    setIsLoading(false);
  }, [activeTab]);

  return children(
    movies,
    handleTabClick,
    handlePaginationChange,
    handleSearch,
    isLoading, 
    pages,
    page
  );
};

export default MainPageContainer;
