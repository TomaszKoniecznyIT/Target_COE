import Card from "../UI/Card";

import classes from "./Day.module.css";

const Day = (props) => {
  console.log(props);
  return (
    <Card className={classes.input}>
      <label>{props.dayTotal[0]}</label>
      <input type="number" value={props.dayTotal[1]}></input>
    </Card>
  );
};

export default Day;
