import Star from "../../assets/star.png";
import "./MovieCard.css";

export const MovieCard = ({ title }) => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg"
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2020</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          beatae, minus, corporis fugit laborum, magni autem pariatur
          perferendis blanditiis aperiam in et repudiandae! Ipsum in illo
          quibusdam dolorem, labore nostrum?
        </p>
      </div>
    </a>
  );
};
