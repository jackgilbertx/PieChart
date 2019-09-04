import React from "react";
import PieChart from "./PieChart";
import "./styles.css";
const App = () => {
  const data = [
    //Adjust below data to render specific chart info
    //The label value will appear in the onHover box
    {
      id: "Key 1",
      label: "Key 1",
      value: 5
      //color: "#b15559"
    },
    {
      id: "Key 2",
      label: "Key 1",
      value: 70
      //color: "#d99933"
    },
    {
      id: "Key 3",
      label: "Key 1",
      value: 12
      //color: "#83a449"
    },
    {
      id: "Key 4",
      label: "Key 4",
      value: 13
      //color: "#337e9e"
    }
  ];
  const props = {
    data,
    chartSize: "300px",
    renderLegend: true,
    colors: ["#b15559", "#d99933", "#83a449", "#337e9e"]
  };

  return <PieChart {...props} />;
};

export default App;
