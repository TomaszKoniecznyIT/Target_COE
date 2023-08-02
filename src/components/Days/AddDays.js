import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Day from "./Day";

import classes from "./AddDays.module.css";
import DaySakeToTarget from "./DaySaleToTarget";

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
  const [howManyDays0, setHowManyDays0] = useState(7);
  const [display, setDisplay] = useState();

  const saveDaysHandler = (enteredDays, enteredValue) => {
    daysResults[enteredDays] = +enteredValue;
  };

  const addDaysHandler = (event) => {
    event.preventDefault();
    setSuma(Object.values(daysResults).reduce((a, b) => a + b));
    setHowManyDays0(
      Object.values(daysResults).filter((item) => item === 0).length
    );
    setDisplay(true);
  };

  return (
    <div>
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
      </Card>
      <Card>
        {display && (
          <DaySakeToTarget
            suma={suma}
            howManyDays0={howManyDays0}
            target100={props.target100}
          />
        )}
      </Card>
    </div>
  );
};

export default AddDays;
