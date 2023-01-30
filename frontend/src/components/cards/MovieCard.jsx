import React from "react";

function MovieCard({ movie }) {
  const { title } = movie;
  return <div>{title}</div>;
}

export default MovieCard;
