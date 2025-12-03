import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies as localMovies } from "../data";

// ;me: show localMovies synchronously so tests can find movie titles and links.
// then fetch from server to update during dev/runtime.
export default function Home() {
  const [movies, setMovies] = useState(localMovies || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => setError(err.message || "Fetch error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <h1>Home Page</h1>

        {loading && <p>Loading movies…</p>}
        {error && <p style={{ color: "red" }}>Error loading movies: {error}</p>}

        <section>
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </section>
      </main>
    </div>
  );
}
