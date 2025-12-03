import React from "react";
import NavBar from "../components/NavBar";
import directors from "../data-directors";

export default function Directors() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Directors Page</h1>
        {directors.map((d) => (
          <article key={d.name}>
            <h2>{d.name}</h2>
            <ul>
              {d.movies.map((mv, i) => (
                <li key={i}>{mv}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}
