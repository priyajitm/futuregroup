import React from "react";

const Card = ({ movieName, rating, releaseDate, image }) => {
  return (
    <div className="card">
      <div className="card-header">{movieName}</div>
      <div className="card-body">
        <img src={image} alt="" />
      </div>
      <div className="card-footer">
        <span>Rating: {rating}</span>
        <span>Released: {releaseDate}</span>
      </div>
    </div>
  );
};

export default Card;
