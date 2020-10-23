import React, { useState } from "react";
import "./App.css";
import CardArray from "./CardArray";
import Search_Box from "./Search_Box";
import { robots } from "./RobotArray";

function App() {
  const [Robots, setRobots] = useState(robots);
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField (event.target.value);
  };

  const filtredRobots = Robots.filter((robot) => {
    return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f2">Robot friends</h1>
      <Search_Box searchChange={onSearchChange} />
      <CardArray robots={filtredRobots} />
    </div>
  );
}

export default App;
