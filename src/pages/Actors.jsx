import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { actors as localActors } from "../data";

// ;me: use localActors immediately so tests can find <article> nodes synchronously.
// then try to fetch from server to update runtime behavior.
export default function Actors() {
  const [actors, setActors] = useState(localActors || []);
  const [loading, setLoading] = useState(false); // initial render already has data
  const [error, setError] = useState(null);

  useEffect(() => {
    // try fetch, but do not block initial render
    setLoading(true);
    fetch("http://localhost:3000/actors")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setActors(data))
      .catch((err) => {
        // ;me: we swallow fetch errors — local data will remain for tests/dev
        setError(err.message || "Fetch error");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <h1>Actors Page</h1>

        {loading && <p>Loading actors…</p>}
        {error && <p style={{ color: "red" }}>Error loading actors: {error}</p>}

        {actors.map((a) => (
          <article key={a.name}>
            <h2>{a.name}</h2>
            <ul>
              {Array.isArray(a.movies) &&
                a.movies.map((mv, i) => <li key={i}>{mv}</li>)}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}
