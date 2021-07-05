import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

import styles from "./Main.module.scss";

import movieDefaultImg from "../../components/MovieCard/img/movieImg.jpg";
import MainPageContainer from "../../containers/MainPageContainer";

function Main() {
  return (
    <MainPageContainer>
      {(results, { genres }, handleTabClick, handlePaginationChange, handleSearch) => (
        <>
          <Header handleSearch={handleSearch}/>
          <main className={styles.wrapper}>
            <TabBar handleTabClick={handleTabClick} />
            <ul className={styles.movies_container}>
              {results.length === 0
                ? "no data"
                : results.map(
                    ({ poster_path, vote_average, title, genre_ids }, ind) => {
                      const photo = poster_path
                        ? `https://image.tmdb.org/t/p/w1280${poster_path}`
                        : movieDefaultImg;

                      const genresStringArr = genre_ids.map((genre_id) => {
                        const targetIndex = genres.findIndex(
                          ({ id }) => id === genre_id
                        );
                        return genres[targetIndex].name;
                      });

                      if (ind > 19) return null;

                      return (
                        <MovieCard
                          key={ind}
                          rating={vote_average}
                          img={photo}
                          title={title}
                          genres={genresStringArr}
                        />
                      );
                    }
                  )}
            </ul>
            <Pagination count={5} handlePaginationChange={handlePaginationChange}/>
          </main>
        </>
      )}
    </MainPageContainer>
  );
}

export default Main;
