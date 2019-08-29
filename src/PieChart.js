import { ResponsivePie } from "@nivo/pie";
import React from "react";
import LegendItem from "./LegendItem";
import PropTypes from "prop-types";
import "./styles.css";

class PieChart extends React.Component {
  state = {
    data: this.props.data,
    centerValue: "50%"
  };

  render() {
    const { data, chartSize, renderCenter } = this.props;

    const legendItems = data.map(legendItem => {
      return (
        <LegendItem
          key={legendItem.id}
          legendClick={() =>
            this.setState({ centerValue: `${legendItem.value}%` })
          }
          legendItem={legendItem}
        />
      );
    });

    const sliceColors = data.map(color => {
      return color.color;
    });

    const fontSize = parseInt(chartSize, 10) / 8;
    const style = {
      container: {
        // position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      },
      chart: {
        height: chartSize,
        width: chartSize,
        position: "relative"
      },
      centerValue: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-44%,-35%)",
        fontFamily: "helvetica",
        fontWeight: "bold",
        fontSize
      },
      legend: {
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ],
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "2%",
        marginTop: "3%"
      }
    };

    const { container, chart, centerValue, legend } = style;

    return (
      <div style={container}>
        <div style={chart}>
          <ResponsivePie
            data={this.state.data}
            startAngle={-180}
            innerRadius={0.87}
            padAngle={1.5}
            colors={sliceColors}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            isInteractive={true}
            onClick={e => this.setState({ centerValue: `${e.value}%` })}
          />
          <div style={centerValue}>
            {renderCenter ? this.state.centerValue : ""}
          </div>
        </div>

        <div style={legend}>{legendItems}</div>
        <div />
      </div>
    );
  }
}
export default PieChart;

PieChart.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  size: PropTypes.string.isRequired,
  renderCenter: PropTypes.bool.isRequired
};

PieChart.defaultProps = {
  renderCenter: true,
  chartSize: "300px",
  data: [
    {
      id: "Key 1",
      value: 25,
      color: "#b15559"
    },
    {
      id: "Key 2",
      value: 25,
      color: "#d99933"
    },
    {
      id: "Key 3",
      value: 25,
      color: "#83a449"
    },
    {
      id: "Key 4",
      value: 25,
      color: "#337e9e"
    }
  ]
};

// import { ResponsivePie } from "@nivo/pie";
// import React from "react";
// import LegendItem from "./LegendItem";
// import PropTypes from "prop-types";
// // import "./styles.css";

// class PieChart extends React.Component {
//   state = {
//     data: this.props.data,
//     centerValue: ""
//   };

//   render() {
//     const { data, chartSize, renderCenter } = this.props;

//     const legendItems = data.map(legendItem => {
//       //creates legend using data prop
//       return (
//         <LegendItem
//           key={legendItem.id}
//           legendClick={() =>
//             this.setState({ centerValue: `${legendItem.value}%` })
//           }
//           legendItem={legendItem}
//         />
//       );
//     });

//     //creates color array from data prop
//     const sliceColors = data.map(color => {
//       return color.color;
//     });

//     const fontSize = parseInt(chartSize, 10) / 8;
//     const style = {
//       container: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column" //height: "100vh"  to make items change size
//       },
//       root: {
//         position: "relative",
//         height: chartSize,
//         width: chartSize
//       },
//       chart: {
//         height: "100%",
//         width: "100%"
//       },
//       centerValueTwoDigits: {
//         position: "absolute",
//         left: "39%",
//         top: "45.3%",
//         fontFamily: "helvetica",
//         fontWeight: "bold",
//         fontSize
//       },
//       centerValueSingleDigit: {
//         position: "absolute",
//         left: "42.5%",
//         top: "45.3%",
//         fontFamily: "helvetica",
//         fontWeight: "bold",
//         fontSize
//       },
//       centerValueThreeDigits: {
//         position: "absolute",
//         left: "36%",
//         top: "45.3%",
//         fontFamily: "helvetica",
//         fontWeight: "bold",
//         fontSize
//       },
//       legend: {
//         fontFamily: [
//           "-apple-system",
//           "BlinkMacSystemFont",
//           "Segoe UI",
//           "Helvetica",
//           "Arial",
//           "sans-serif",
//           "Apple Color Emoji",
//           "Segoe UI Emoji",
//           "Segoe UI Symbol"
//         ],
//         display: "flex",
//         justifyContent: "space-around",
//         marginTop: "2.7%",
//         marginLeft: "2%"
//       }
//     };

//     const {
//       container,
//       root,
//       chart,
//       centerValueSingleDigit,
//       centerValueTwoDigits,
//       centerValueThreeDigits,
//       legend
//     } = style;

//     return (
//       <div style={container}>
//         <div style={root}>
//           <div style={chart}>
//             <ResponsivePie
//               data={this.state.data}
//               startAngle={-180}
//               innerRadius={0.87}
//               padAngle={1.5}
//               colors={sliceColors}
//               borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//               enableRadialLabels={false}
//               enableSlicesLabels={false}
//               isInteractive={true} // pass down prop
//               onClick={e => this.setState({ centerValue: `${e.value}%` })}
//             />
//           </div>

//           <div //adjusts the position of the chart value to make sure its centered regardless of # of digits
//             style={
//               this.state.centerValue.length === 2
//                 ? centerValueSingleDigit
//                 : this.state.centerValue.length === 3
//                 ? centerValueTwoDigits
//                 : centerValueThreeDigits
//             }
//           >
//             {renderCenter ? this.state.centerValue : ""}
//           </div>
//         </div>
//         <div style={legend}>{legendItems}</div>
//         <div />
//       </div>
//     );
//   }
// }

// PieChart.defautProps = {
//   data: PropTypes.arrayOf(Object).isRequired,
//   size: PropTypes.string.isRequired,
//   renderCenter: PropTypes.bool.isRequired
// };

// export default PieChart;
