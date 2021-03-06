import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, rating, title, summary, poster, genres }) {
    return (
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie-data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <h5 className="movie__rating">{rating}/10</h5>
          <ul className="movie__genres">
            {genres.map((genre, index)=>{
              return (<li key={index} className="genres__genre"> {genre} </li>)
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    );
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;