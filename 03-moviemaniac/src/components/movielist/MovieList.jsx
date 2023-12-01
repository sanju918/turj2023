import { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import { MovieCard } from "./MovieCard";
import FilterGroup from "./FilterGroup";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b5a717895b70429b0aa3736efc37e8f2"
    );
    const data = await res?.json();
    setMovies(data?.results);
    setFilterMovies(data?.results);
    console.log(data);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered_movies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilterMovies(filtered_movies);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(sort);

  return (
    <section className="movie_list">
      {/*  Header */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      {/* Movie Card List */}
      <div className="movie_cards">
        {/* <MovieCard /> */}
        {filterMovies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
            release_dt={movie.release_date}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};
