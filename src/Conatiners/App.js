import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardArray from "../Components/CardArray";
import Search_Box from "../Components/Search_Box";
import { robots } from "../RobotArray";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
  };
};

function App(props) {
  const [Robots, setRobots] = useState(robots);

  const { searchField, onSearchChange } = props;
  const filtredRobots = Robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f2">Robot friends</h1>
      <Search_Box searchChange={onSearchChange} />
      <CardArray robots={filtredRobots} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
