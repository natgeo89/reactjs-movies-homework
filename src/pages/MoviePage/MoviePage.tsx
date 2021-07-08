import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";

import styles from "./MoviePage.module.scss";

// import movieDefaultImg from "../../components/MovieCard/img/movieImg.jpg";
import Button from "../../components/Button";
import MoviePageContainer from "../../containers/MoviePageContainer";

function MoviePage() {
  return (
    <MoviePageContainer>
      {({
        backdrop_path,
        revenue,
        genres,
        runtime,
        title,
        overview,
        release_date,
      }, handleSearch) => {
        const movieImg = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;

        return (
          <>
            <Header handleSearch={handleSearch}/>
            <main className={styles.movie_page}>
              <section className={styles.movie_block}>
                <MovieCard rating={10} img={movieImg} />
                <div className={styles.movie_info}>
                  <div>
                    <h3>Title:</h3>
                    <div className={styles.movie_info__title}>{title}</div>
                  </div>

                  <div>
                    <h3>Overview:</h3>
                    <div className={styles.movie_info__overview}>
                      {overview}
                    </div>
                  </div>
                  <div>
                    <h3>Release date:</h3>
                    <div className={styles.movie_info__release_date}>
                      {release_date}
                    </div>
                  </div>
                  <div>
                    <h3>Revenue:</h3>
                    <div className={styles.movie_info__revenue}>
                      $ {revenue.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <h3>Duration:</h3>
                    <div className={styles.movie_info__duration}>
                      {runtime} min
                    </div>
                  </div>
                  <ul>
                    {genres.map(({ name }) => (
                      <Button primary>{name}</Button>
                    ))}
                    {/* <Button primary>{"genre2"}</Button> */}
                  </ul>
                  {/* <div>
                    <h3>Photos:</h3>
                    <ul className={styles.movie_info__photos}>
                      {Array(5).map(({}, ind) => {
                        const photo = `https://image.tmdb.org/t/p/w1280${""}`;

                        return (
                          <li key={ind}>
                            <img
                              src={photo}
                              className={styles.movie_info__photos__photo}
                              alt="MovieImg"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div> */}
                </div>
              </section>
              {/* <section>
          <div className={styles.known_by}>known by</div>

          <ul className={styles.movies_container}>
            {cast.map(
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

                if (ind > 9) return null;

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
        </section> */}
            </main>
          </>
        );
      }}
    </MoviePageContainer>
  );
}

export default MoviePage;
