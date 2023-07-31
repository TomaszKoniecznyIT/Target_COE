import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddTarget from "./components/Targets/AddTarget";
import AddDays from "./components/Days/AddDays";

function App() {
  const [target, setTarget] = useState(0);

  const onTargetHandler = (dataTarget) => {
    setTarget(dataTarget);
  };

  return (
    <div>
      <Header></Header>
      <AddTarget onTarget={onTargetHandler} />
      <AddDays target100={target} />
    </div>
  );
}

export default App;
