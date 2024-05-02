import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({

 baseUrl: 'https://api.themoviedb.org/3/movie',
 params: {
  api_key: THE_MOVIE_DB_KEY,
 // api_key: 'f86af295c2420d3abee2480e3418c661',
  language: 'es',
 }

})