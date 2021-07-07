import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";

import styles from "./ActorPage.module.scss";

import movieDefaultImg from "../../components/MovieCard/img/movieImg.jpg";

import ActorPageContainer from "../../containers/ActorPageContainer";

function ActorPage() {
  return (
    <ActorPageContainer>
      {(
        { name, birthday, place_of_birth, biography, profile_path },
        { profiles },
        { cast },
        { genres },
        handleSearch
      ) => {
        const actorProfile = `https://image.tmdb.org/t/p/w1280${profile_path}`;

        return (
          <>
            <Header handleSearch={handleSearch}/>
            <main className={styles.actor_page}>
              <section className={styles.actor_block}>
                <img
                  src={actorProfile}
                  className={styles.actor_img}
                  alt="actor"
                />
                <div className={styles.actor_info}>
                  <h2>{name}</h2>
                  <div>
                    <h3>Birthday:</h3>
                    <div className={styles.actor_info__birthday}>
                      {birthday}
                    </div>
                  </div>
                  <div>
                    <h3>Place of birth:</h3>
                    <div className={styles.actor_info__place_birth}>
                      {place_of_birth}
                    </div>
                  </div>
                  <div>
                    <h3>Biography:</h3>
                    <div className={styles.actor_info__biography}>
                      {biography}
                    </div>
                  </div>
                  <div>
                    <h3>Photos:</h3>
                    <ul className={styles.actor_info__photos}>
                      {profiles.map(({ file_path }, ind) => {
                        const photo = `https://image.tmdb.org/t/p/w1280${file_path}`;

                        return (
                          <li key={ind}>
                            <img
                              src={photo}
                              className={styles.actor_info__photos__photo}
                              alt="actorImg"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>
              <section>
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
                      })

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
              </section>
            </main>
          </>
        );
      }}
    </ActorPageContainer>
  );
}

export default ActorPage;
