import React from "react";
import "tachyons";

function Card({ name, rank }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt ='robot' src={`https://robohash.org/${name}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <h5>Rank : {rank}</h5>
      </div>
    </div>
  );
}

export default Card;
