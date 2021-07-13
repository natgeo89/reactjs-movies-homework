import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";

import styles from "./MoviePage.module.scss";
import actorDefaultImage from "../../components/ActorCard/img/actorDefaultImage.jpg";

import Button from "../../components/Button";
import MoviePageContainer from "../../containers/MoviePageContainer";
import ActorCard from "../../components/ActorCard";

function MoviePage() {
  return (
    <MoviePageContainer>
      {(
        {
          backdrop_path,
          revenue,
          genres,
          runtime,
          title,
          overview,
          release_date,
          id,
          vote_average,
        },
        actors,
        handleSearch
      ) => {
        const movieImg = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;

        return (
          <>
            <Header handleSearch={handleSearch} />
            <main className={styles.movie_page}>
              <section className={styles.movie_block}>
                <MovieCard id={id} rating={vote_average} img={movieImg} />
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
                  <ul className={styles.genres_list}>
                    {genres.map(({ name }) => (
                      <Button primary>{name}</Button>
                    ))}
                  </ul>
                  <div>
                    <h3>Top Billed Cast</h3>
                    <ul className={styles.actors_container}>
                      {actors.map(
                        ({ id, name, profile_path, character }, ind) => {
                          if (ind > 5) return null;
                          const photo = profile_path
                            ? `https://image.tmdb.org/t/p/w1280${profile_path}`
                            : actorDefaultImage;

                          return (
                            <ActorCard
                              key={id}
                              id={id}
                              img={photo}
                              actorName={name}
                              character={character}
                            />
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </section>
            </main>
          </>
        );
      }}
    </MoviePageContainer>
  );
}

export default MoviePage;
