import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <article className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
