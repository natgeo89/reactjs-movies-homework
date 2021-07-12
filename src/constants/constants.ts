
export const API_KEY: string = "231a9923e67455d132639e888240a6ae";
//known_by
//https://api.themoviedb.org/3/person/6193/movie_credits?api_key=231a9923e67455d132639e888240a6ae&language=en-US

// https://api.themoviedb.org/3/movie/550?api_key=231a9923e67455d132639e888240a6ae
interface IGenres {
  [key: number]: {
    [key: string]: string;
  };
}

export const genres: IGenres = {
  28: { en: "Action", ru: "Боевик" },
  12: { en: "Adventure", ru: "Приключения" },
  16: { en: "Animation", ru: "Мультфильм" },
  35: { en: "Comedy", ru: "Комедия" },
  80: { en: "Crime", ru: "Криминал" },
  99: { en: "Documentary", ru: "Документальный" },
  18: { en: "Drama", ru: "Драма" },
  10751: { en: "Family", ru: "Семейный" },
  14: { en: "Fantasy", ru: "Фэнтези" },
  36: { en: "History", ru: "История" },
  27: { en: "Horror", ru: "Ужасы" },
  10402: { en: "Music", ru: "Музыка" },
  9648: { en: "Mystery", ru: "Детектив" },
  10749: { en: "Romance", ru: "Мелодрама" },
  878: { en: "Science Fiction", ru: "Фантастика" },
  10770: { en: "TV Movie", ru: "Телевизионный фильм" },
  53: { en: "Thriller", ru: "Триллер" },
  10752: { en: "War", ru: "Военный" },
  37: { en: "Western", ru: "Вестерн" },
};
