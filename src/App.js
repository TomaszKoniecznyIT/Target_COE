import React from "react";
import Header from "./components/Header/Header";
import AddTarget from "./components/Targets/AddTarget";
import AddDays from "./components/Days/AddDays";

function App() {
  const daysResults = [
    { dayWeek: "Monday", value: 0 },
    { dayWeek: "Tuesday", value: 0 },
    { dayWeek: "Wednesday", value: 0 },
    { dayWeek: "Thursday", value: 0 },
    { dayWeek: "Friday", value: 0 },
    { dayWeek: "Saturday", value: 0 },
    { dayWeek: "Sunday", value: 0 },
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
