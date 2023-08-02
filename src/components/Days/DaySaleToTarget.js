import Card from "../UI/Card";

const DaySakeToTarget = (props) => {
  return (
    <Card>
      <h2>We still have to do: {props.target100 - props.suma}</h2>
      <h2>
        Daily target: {(props.target100 - props.suma) / props.howManyDays0}
      </h2>
    </Card>
  );
};

export default DaySakeToTarget;
