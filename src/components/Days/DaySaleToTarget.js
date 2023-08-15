import Card from "../UI/Card";

const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DaySakeToTarget = (props) => {
  return (
    <Card>
      <h2>
        We still have to do: {formatter.format(props.target100 - props.suma)}
      </h2>
      <h2>
        Daily target 100%:{" "}
        {formatter.format((props.target100 - props.suma) / props.howManyDays0)}
      </h2>
      <h2>
        Daily target 110%:{" "}
        {formatter.format(
          (props.target100 * 1.1 - props.suma) / props.howManyDays0
        )}
      </h2>
      <h2>
        Daily target 115%:{" "}
        {formatter.format(
          (props.target100 * 1.15 - props.suma) / props.howManyDays0
        )}
      </h2>
      <h2>
        Daily target 120%:{" "}
        {formatter.format(
          (props.target100 * 1.2 - props.suma) / props.howManyDays0
        )}
      </h2>
    </Card>
  );
};

export default DaySakeToTarget;
