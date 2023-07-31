import Card from "../UI/Card";

import classes from "./TargetsLevel.module.css";

const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TargetsLevel = (props) => {
  return (
    <Card className={classes["targets-level"]}>
      <Card>
        <h2>Target 100%: {formatter.format(props.target)}</h2>
      </Card>
      <Card>
        <h2>Target 110%: {formatter.format(props.target * 1.1)}</h2>
      </Card>
      <Card>
        <h2>Target 115%: {formatter.format(props.target * 1.15)}</h2>
      </Card>
      <Card>
        <h2>Target 120%: {formatter.format(props.target * 1.2)}</h2>
      </Card>
    </Card>
  );
};

export default TargetsLevel;
