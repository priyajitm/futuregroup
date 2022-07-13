import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppState";

const CardContainer = () => {
  const { getMovies, movies } = useContext(AppContext);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="card-container">
      {movies &&
        movies.map((movie) => (
          <Card
            key={movie.id}
            movieName={movie.name}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
            image={movie.image}
          />
        ))}
    </div>
  );
};

export default CardContainer;
