import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <article className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
}
