import "./MovieList.css";
import Fire from "../../assets/fire.png";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b5a717895b70429b0aa3736efc37e8f2"
    );
    const data = await res?.json();
    setMovies(data?.results);
    console.log(data);
  };

  return (
    <section className="movie_list">
      {/*  Header */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>
          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      {/* Movie Card List */}
      <div className="movie_cards">
        {/* <MovieCard /> */}
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
            release_dt={movie.release_date}
          />
        ))}
      </div>
    </section>
  );
};
