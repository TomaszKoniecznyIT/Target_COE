import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./Day.module.css";

const Day = (props) => {
  const [dayValue, setDayValue] = useState(0);

  const dayChangeHandler = (event) => {
    setDayValue(event.target.value);
  };

  props.onSaveDays(props.dayTotal, dayValue);

  return (
    <Card className={classes.input}>
      <label>{props.dayTotal}</label>
      <input type="number" value={dayValue} onChange={dayChangeHandler}></input>
    </Card>
  );
};

export default Day;
