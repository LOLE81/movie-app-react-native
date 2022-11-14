import axios from "axios";
const API_KEY = process.env.API_KEY;

const useApiSettings = () => {
  const getAll = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?${API_KEY}&page=50`
      );
      console.log("--------------------", response.data.results[0].poster_path);
      const moviesInfo = await response.data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          review: movie.overview,
          image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          year: movie.release_date,
          rating: movie.vote_average,
          votes: movie.vote_count,
          genres: movie.genre_ids,
        };
      });
      return moviesInfo;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getGenres = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`
      );
      const genres = await response.data.genres.map((genre) => {
        return {
          id: genre.id,
          genre: genre.genre,
        };
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    getAll,
    getGenres,
  };
};

export default useApiSettings;
