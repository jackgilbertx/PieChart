import React from "react";
//import "./styles.css";

class LegendItem extends React.Component {
  state = { hover: false };

  render() {
    const { legendClick, legendItem } = this.props;

    const style = {
      legendUnit: {
        display: "flex",
        cursor: "pointer",
        marginRight: "19px"
      },
      legendValue: {
        opacity: 0.7,
        paddingLeft: "2px",
        marginBottom: "3px",
        fontSize: "0.8em",
        marginRight: "10px"
      },
      legendValueHover: {
        opacity: 1,
        paddingLeft: "2px",
        marginBottom: "3px",
        fontSize: "0.8em",
        marginRight: "10px"
      },
      legendMarker: {
        backgroundColor: `${legendItem.color}`,
        height: "18px",
        width: "18px",
        borderRadius: "55%",
        marginRight: "4px"
      }
    };

    const { legendUnit, legendValue, legendValueHover, legendMarker } = style;

    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })} //for text hover effect sans css file
        onMouseLeave={() => this.setState({ hover: false })}
        onClick={legendClick}
        style={legendUnit}
      >
        <div style={legendMarker} />
        <div style={!this.state.hover ? legendValue : legendValueHover}>
          {legendItem.id}
        </div>
      </div>
    );
  }
}

export default LegendItem;

// {/* <div onClick={legendClick} className="legend-item">
//       <div
//         style={{ backgroundColor: `${legendItem.color}` }}
//         className="legend-marker"
//       />
//       <div className="legend-value">{legendItem.id}</div>
//     </div> */}
