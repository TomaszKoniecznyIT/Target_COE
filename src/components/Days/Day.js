import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./Day.module.css";

const Day = (props) => {
  const [day, setDay] = useState("");
  const dayChangeHandler = (event) => {
    setDay(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <label>{props.dayTotal.dayWeek}</label>
      <input type="number" value={day} onChange={dayChangeHandler}></input>
    </Card>
  );
};

export default Day;
