import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddTarget.module.css";

const AddTarget = () => {
  const addTargetHandler = () => {
    console.log("new target");
  };

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="target">Weekly target</label>
        <input id="target" type="number"></input>
        <Button onClick={addTargetHandler}>Add New Target</Button>
      </form>
    </Card>
  );
};

export default AddTarget;
