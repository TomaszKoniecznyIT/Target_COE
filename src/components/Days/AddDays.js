import Button from "../UI/Button";
import Card from "../UI/Card";
import Day from "./Day";

const AddDays = (props) => {
  return (
    <Card>
      <label>Results of individual days</label>
      <Card>
        {props.daysResults.map((dayTotal) => (
          <Day dayTotal={dayTotal}></Day>
        ))}
      </Card>
      <Button type="submit">Calculate</Button>
    </Card>
  );
};

export default AddDays;
