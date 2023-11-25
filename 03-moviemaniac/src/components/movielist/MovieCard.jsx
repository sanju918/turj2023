import Star from "../../assets/star.png";
import "./MovieCard.css";

export const MovieCard = ({ title, overview, poster, release_dt }) => {
  return (
    <a href="" className="movie_card">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster}
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
          <p>{release_dt}</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{overview}</p>
      </div>
    </a>
  );
};
