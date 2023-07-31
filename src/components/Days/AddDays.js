import Button from "../UI/Button";
import Card from "../UI/Card";
import Day from "./Day";

import classes from "./AddDays.module.css";

const AddDays = (props) => {
  return (
    <Card className={classes.days}>
      <h2>Results of individual days</h2>
      <form>
        <Card>
          {props.daysResults.map((dayTotal) => (
            <Day dayTotal={dayTotal}></Day>
          ))}
        </Card>
        <Button type="submit">Calculate</Button>
      </form>
    </Card>
  );
};

export default AddDays;
