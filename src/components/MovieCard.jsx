import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <article className="movie-card">
      <h3>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h3>
    </article>
  );
}