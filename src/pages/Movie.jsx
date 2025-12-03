import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import movies from "../data";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === String(id));

  return (
    <div>
      <NavBar />
      <main>
        {movie ? (
          <article>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            <div>
              {movie.genres.map((g, idx) => (
                <span key={idx}>{g} </span>
              ))}
            </div>
          </article>
        ) : (
          <h1>Movie not found</h1>
        )}
      </main>
    </div>
  );
}
