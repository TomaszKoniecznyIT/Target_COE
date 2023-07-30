import React from "react";
import Header from "./components/Header/Header";
import AddDay from "./components/Days/AddDay";
import AddTarget from "./components/Targets/AddTarget";

function App() {
  return (
    <div>
      <Header></Header>
      <AddTarget />
    </div>
  );
}

export default App;
