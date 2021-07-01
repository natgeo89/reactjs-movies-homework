import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

import styles from "./Main.module.scss";

import img from "../components/MovieCard/img/movieImg.jpg";

function Main() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TabBar />
        <ul className={styles.movies_container}>
          {Array.from(Array(20), (item, index) => (
            <MovieCard
              key={index}
              rating={8.8}
              img={img}
              title={"Movie Title"}
              genres={["genre1", "genre2"]}
            />
          ))}
        </ul>
        <Pagination count={5} />
      </main>
    </>
  );
}

export default Main;
