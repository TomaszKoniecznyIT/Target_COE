import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Day from "./Day";

import classes from "./AddDays.module.css";

const daysResults = {
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Saturday: 0,
  Sunday: 0,
};

const AddDays = (props) => {
  const [suma, setSuma] = useState(0);
  const saveDaysHandler = (enteredDays, enteredValue) => {
    daysResults[enteredDays] = +enteredValue;
  };

  const addDaysHandler = (event) => {
    event.preventDefault();
    setSuma(Object.values(daysResults).reduce((a, b) => a + b));
  };

  return (
    <Card className={classes.days}>
      <h2>Results of individual days</h2>
      <form onSubmit={addDaysHandler}>
        <Card>
          {Object.keys(daysResults).map((dayTotal) => (
            <Day
              key={dayTotal}
              dayTotal={dayTotal}
              onSaveDays={saveDaysHandler}
            ></Day>
          ))}
        </Card>
        <Button type="submit">Calculate</Button>
      </form>
      <p>{props.target100 - suma}</p>
    </Card>
  );
};

export default AddDays;
