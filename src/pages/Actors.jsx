import React from "react";
import NavBar from "../components/NavBar";
import actors from "../data-actors";

export default function Actors() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Actors Page</h1>
        {actors.map((a) => (
          <article key={a.name}>
            <h2>{a.name}</h2>
            <ul>
              {a.movies.map((mv, i) => (
                <li key={i}>{mv}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}
