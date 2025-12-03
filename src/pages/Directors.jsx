import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { directors as localDirectors } from "../data";

// ;me: localDirectors for immediate render, then update from server when available
export default function Directors() {
  const [directors, setDirectors] = useState(localDirectors || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/directors")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setDirectors(data))
      .catch((err) => setError(err.message || "Fetch error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <h1>Directors Page</h1>

        {loading && <p>Loading directors…</p>}
        {error && <p style={{ color: "red" }}>Error loading directors: {error}</p>}

        {directors.map((d) => (
          <article key={d.name}>
            <h2>{d.name}</h2>
            <ul>
              {Array.isArray(d.movies) && d.movies.map((mv, i) => <li key={i}>{mv}</li>)}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}
