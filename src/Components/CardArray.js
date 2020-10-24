import React from "react";
import Card from "./Card";

function CardArray({ robots }) {
  return (
    <div>
      {robots.map((robot) => {
        return <Card key={robot.id} name={robot.name} rank={robot.rank} />;
      })}
    </div>
  );
}

export default CardArray;
