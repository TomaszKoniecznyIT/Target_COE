import Button from "../UI/Button";
import Card from "../UI/Card";

const AddTarget = () => {
  const addTargetHandler = () => {
    console.log("new target");
  };

  return (
    <Card>
      <Button onClick={addTargetHandler}>Add New Target</Button>
    </Card>
  );
};

export default AddTarget;
