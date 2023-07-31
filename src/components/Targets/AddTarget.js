import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddTarget.module.css";
import TargetsLevel from "./TargetsLevel";

const AddTarget = () => {
  const [enteredTarget, setEnteredTarget] = useState("");
  const [target, setTarget] = useState();

  const targetChangeHandler = (event) => {
    setEnteredTarget(event.target.value);
  };

  const addTargetHandler = (event) => {
    event.preventDefault();
    setTarget(+enteredTarget);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addTargetHandler}>
          <h2>Weekly target</h2>
          <input
            id="target"
            type="number"
            value={enteredTarget}
            onChange={targetChangeHandler}
          ></input>
          <Button type="submit">Add New Target</Button>
        </form>
      </Card>
      {target && <TargetsLevel target={target} />}
    </div>
  );
};

export default AddTarget;
