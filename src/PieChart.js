import { ResponsivePie } from "@nivo/pie";
import React from "react";
import LegendItem from "./LegendItem";
import PropTypes, { array } from "prop-types";
import "./styles.css";

class PieChart extends React.Component {
  state = {
    centerValue: ""
  };

  render() {
    const { data, chartSize, renderLegend, colors } = this.props;

    const dataLen = data.length;
    const colorLen = colors.length;
    let difference = Math.abs(dataLen - colorLen);

    // if (colorLen > dataLen) {
    //   for (let i = 0; i < difference; i++) {
    //     colors.pop();
    //   }
    // }
    if (colorLen > dataLen) {
      while (difference > 0) {
        colors.pop();
        difference -= 1;
      }
    }

    colors.forEach((color, index) => {
      data[index].color = colors[index];
    });

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

    // const sliceColors = data.map(sliceColor => {
    //   return sliceColor.color;
    // });

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
        justifyContent: "center",
        marginLeft: "2%",
        marginTop: "3%"
      }
    };

    const { container, chart, centerValue, legend } = style;

    return (
      <div style={container}>
        <div style={chart}>
          <ResponsivePie
            data={data}
            startAngle={-180}
            innerRadius={0.87}
            padAngle={1.5}
            colors={colors}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            isInteractive={true}
            onClick={e => this.setState({ centerValue: `${e.value}%` })}
          />
          <div style={centerValue}>{this.state.centerValue}</div>
        </div>
        <div style={legend}>{renderLegend ? legendItems : ""}</div>
        <div />
      </div>
    );
  }
}
export default PieChart;

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  chartSize: PropTypes.string.isRequired,
  renderCenter: PropTypes.bool.isRequired
};

PieChart.defaultProps = {
  renderCenter: true,
  chartSize: "300px",
  data: [
    {
      id: "Key 1",
      label: "Key 1",
      value: 5,
      color: "#b15559"
    },
    {
      id: "Key 2",
      label: "Key 1",
      value: 70,
      color: "#d99933"
    },
    {
      id: "Key 3",
      label: "Key 1",
      value: 12,
      color: "#83a449"
    },
    {
      id: "Key 4",
      label: "Key 4",
      value: 13,
      color: "#337e9e"
    }
  ]
};
