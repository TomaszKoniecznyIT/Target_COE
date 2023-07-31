import React from "react";
import Header from "./components/Header/Header";
import AddTarget from "./components/Targets/AddTarget";
import AddDays from "./components/Days/AddDays";

function App() {
  return (
    <div>
      <Header></Header>
      <AddTarget />
      <AddDays />
    </div>
  );
}

export default App;
