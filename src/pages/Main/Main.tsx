import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import Pagination from "../../components/Pagination";

import styles from "./Main.module.scss";

import MainPageContainer from "../../containers/MainPageContainer";
import MovieList from "../../components/MovieList";

function Main() {
  return (
    <MainPageContainer>
      {(movies, handleTabClick, handlePaginationChange, handleSearch, pages, activePage) => (
        <>
          <Header handleSearch={handleSearch}/>
          <main className={styles.wrapper}>
            <TabBar handleTabClick={handleTabClick} />
            <MovieList movies={movies}/>
            <Pagination count={pages} activePage={activePage} handlePaginationChange={handlePaginationChange}/>
          </main>
        </>
      )}
    </MainPageContainer>
  );
}

export default Main;
