import Card from "../UI/Card";

const Day = (props) => {
  console.log(props);
  return (
    <Card>
      <label>{props.dayTotal[0]}</label>
      <input value={props.dayTotal[1]}></input>
    </Card>
  );
};

export default Day;
