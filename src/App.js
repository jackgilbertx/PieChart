import React from "react";
import PieChart from "./PieChart";
import "./styles.css";
const App = () => {
  const data = [
    //Adjust below data to render specific chart info
    {
      id: "Key 1",
      value: 5,
      color: "#b15559"
    },
    {
      id: "Key 2",
      value: 70,
      color: "#d99933"
    },
    {
      id: "Key 3",
      value: 12,
      color: "#83a449"
    },
    {
      id: "Key 4",
      value: 18,
      color: "#337e9e"
    }
  ];
  const props = {
    data,
    chartSize: "260px",
    renderCenter: true // set to true to render center value in chart
  };

  return <PieChart {...props} />;
};

export default App;

// fontSize: function() {
//   let size = parseInt(this.style.root.height / 10, 10);
//       return size;
//   },

// const style = {
//   root: {
//     position: "relative",
//     height: "600px",
//     maxWidth: "600px"
//   },
//   chart: {
//     height: "100%",
//     width: "100%"
//   },
//   centerValue: {
//     position: "absolute",
//     left: "41%",
//     top: "42%",
//     fontSize: 60,
//     fontFamily: "helvetica",
//     fontWeight: "bold"
//   },
//   centerValueSingleDigit: {
//     //styling to adjust positioning of single digit value
//     position: "absolute",
//     left: "43.5%",
//     top: "42%",
//     fontSize: 60,
//     fontFamily: "helvetica",
//     fontWeight: "bold"
//   }
// };

// const style = {
//   root: {
//     display: "flex",
//     height: "600px",
//     width: "600px" !important,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   chart: {
//     height: "100%",
//     width: "100%",
//     textAlign: "center"
//   },
//   overlay: {
//     position: "absolute",
//     left: "41%",
//     top: "42%",
//     fontSize: 60,
//     fontFamily: "helvetica",
//     fontWeight: "bold"
//   }
// };
