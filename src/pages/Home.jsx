import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import movies from "../data";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Home Page</h1>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </main>
    </div>
  );
}
