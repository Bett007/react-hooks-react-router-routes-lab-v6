import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies as localMovies } from "../data";

// ;me: use localMovies first (synchronous), then fetch from server to replace if available.
export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(() =>
    localMovies.find((m) => String(m.id) === String(id))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        if (res.status === 404) throw new Error("Movie not found");
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => {
        // ;me: if fetch fails, leave the local movie in place (so tests keep passing)
        setError(err.message || "Fetch error");
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <NavBar />
      <main>
        {loading && <p>Loading movie…</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {movie ? (
          <article>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            <div>
              {Array.isArray(movie.genres) &&
                movie.genres.map((g, idx) => (
                  <span key={idx} style={{ display: "inline-block", marginRight: 8 }}>
                    {g}
                  </span>
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
