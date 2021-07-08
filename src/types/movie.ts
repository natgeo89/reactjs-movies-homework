export interface ImovieInfo {
  backdrop_path: string ;
  revenue: number;
  overview: string;
  release_date: string;
  genres: {id: number; name: string;}[];
  runtime: number | null;
  title: string;
  id: number;
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
  total_pages: number;
}

export interface IGenres {
  genres: Array<{id: number; name: string}>
}

