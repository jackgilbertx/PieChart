import { ResponsivePie } from "@nivo/pie";
import React from "react";
import LegendItem from "./LegendItem";
import PropTypes from "prop-types";
// import "./styles.css";

class PieChart extends React.Component {
  state = {
    data: this.props.data,
    centerValue: ""
  };

  render() {
    const { data, size, renderCenter } = this.props;

    const legendItems = data.map(legendItem => {
      //creates legend based on data prop
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

    //creates color array from data prop
    const sliceColors = data.map(color => {
      return color.color;
    });

    const fontSize = parseInt(size, 10) / 8;
    const style = {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column" //height: "100vh"  to make items change size
      },
      root: {
        position: "relative",
        height: size,
        width: size
      },
      chart: {
        height: "100%",
        width: "100%"
      },
      centerValueTwoDigits: {
        position: "absolute",
        left: "39%",
        top: "45.3%",
        fontFamily: "helvetica",
        fontWeight: "bold",
        fontSize
      },
      centerValueSingleDigit: {
        position: "absolute",
        left: "42.5%",
        top: "45.3%",
        fontFamily: "helvetica",
        fontWeight: "bold",
        fontSize
      },
      centerValueThreeDigits: {
        position: "absolute",
        left: "36%",
        top: "45.3%",
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
        marginTop: "2.7%",
        marginLeft: "2%"
      }
    };

    const {
      container,
      root,
      chart,
      centerValueSingleDigit,
      centerValueTwoDigits,
      centerValueThreeDigits,
      legend
    } = style;

    return (
      <div style={container}>
        <div style={root}>
          <div style={chart}>
            <ResponsivePie
              data={this.state.data}
              startAngle={-180}
              innerRadius={0.87}
              padAngle={1.5}
              colors={sliceColors}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              enableRadialLabels={false}
              enableSlicesLabels={false}
              isInteractive={true} // pass down prop
              onClick={e => this.setState({ centerValue: `${e.value}%` })}
            />
          </div>

          <div //adjusts the position of the chart value to make sure its centered regardless of # of digits
            style={
              this.state.centerValue.length === 2
                ? centerValueSingleDigit
                : this.state.centerValue.length === 3
                ? centerValueTwoDigits
                : centerValueThreeDigits
            }
          >
            {renderCenter ? this.state.centerValue : ""}
          </div>
        </div>
        <div style={legend}>{legendItems}</div>
        <div />
      </div>
    );
  }
}

PieChart.defautProps = {
  data: PropTypes.arrayOf(Object).isRequired,
  size: PropTypes.string.isRequired,
  renderCenter: PropTypes.bool.isRequired
};

export default PieChart;

// const legendItems = data.map(legendItem => {
//   return (
//     <div
//       onClick={() => this.setState({ centerValue: `${legendItem.value}%` })}
//       className="legend-item"
//     >
//       <div
//         style={{ backgroundColor: `${legendItem.color}` }}
//         className="legend-marker"
//       />
//       <div className="legend-value">{legendItem.id}</div>
//     </div>
//   );
// });
