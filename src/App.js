import React from "react";
import Header from "./components/Header/Header";
import AddTarget from "./components/Targets/AddTarget";
import AddDays from "./components/Days/AddDays";

function App() {
  const daysResults = [
    ["Monday", 0],
    ["Tuesday", 0],
    ["Wednesday", 0],
    ["Thursday", 0],
    ["Friday", 0],
    ["Saturday", 0],
    ["Sunday", 0],
  ];

  return (
    <div>
      <Header></Header>
      <AddTarget />
      <AddDays daysResults={daysResults} />
    </div>
  );
}

export default App;
