export interface ImovieInfo {
  backdrop_path: string ;
  revenue: number;
  overview: string;
  release_date: string;
  genres: {id: number; name: string;}[];
  runtime: number | null;
  title: string;
}

export interface IMovieCard {
  title: string;
  poster_path: string | null;
  vote_average: number;
  genre_ids: number[];
  id: number;
}

export interface IMoviesResults {
  page: number;
  results: IMovieCard[];
}

// interface ITopRated {
//   page: number;
//   results: IMovieCard[];
// }

export interface IGenres {
  genres: Array<{id: number; name: string}>
}


// export type IMoviesResults = IPopular | ITopRated;