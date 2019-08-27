import { ResponsivePie } from "@nivo/pie";
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class PieChart extends React.Component {
  state = {
    data: this.props.data,
    centerValue: ""
  };

  render() {
    const { data, size, renderCenter } = this.props;
    //creates legend based on data prop
    const keyItems = data.map(key => {
      return (
        <div
          onClick={() => this.setState({ centerValue: `${key.value}%` })}
          className="key-item"
        >
          <div
            style={{ backgroundColor: `${key.color}` }}
            className="key-marker"
          />
          <div className="key-value">{key.id}</div>
        </div>
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
        flexDirection: "column"
        //height: "100vh"  to make items change size
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
      centerValue: {
        position: "absolute",
        left: "39%",
        top: "45.3%",
        fontFamily: "helvetica",
        fontWeight: "bold",
        fontSize
      },
      centerValueSingleDigit: {
        //styling to adjust positioning of single digit value
        position: "absolute",
        left: "42.5%",
        top: "45.3%",
        fontFamily: "helvetica",
        fontWeight: "bold",
        fontSize
      }
    };

    return (
      <div style={style.container}>
        <div style={style.root}>
          <div style={style.chart}>
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
              this.state.centerValue.length > 2
                ? style.centerValue
                : style.centerValueSingleDigit
            }
          >
            {renderCenter ? this.state.centerValue : ""}
          </div>
        </div>
        <div className="container">{keyItems}</div>
        <div />
      </div>
    );
  }
}

PieChart.defautProps = {
  data: PropTypes.arrayOf(Object).isRequired,
  size: PropTypes.string.isRequired
};

export default PieChart;
