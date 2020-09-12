import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Steps(props) {
  const { numberOfSteps,  styleConfig, activeStep } = props;

  const getStepStyle = (step) => {
    let style;
    if (step < activeStep) {
      style = {
        color: "black",
        background: "white",
        border: `1px solid ${styleConfig.activeColor}`,
      };
    } else if (step === activeStep) {
      style = { background: "green" };
    } else {
      style = {
        color: "grey",
        background: "white",
        border: `1px solid lightgrey`,
        opacity: '70%'
      };
    }
    return style;
  };

  const renderSteps = (steps) => {
    let arrayOfSteps = [];
    for (let index = 1; index <= steps; index++) {
      arrayOfSteps = [
        ...arrayOfSteps,
        <div style={getStepStyle(index)} className="stepContainer">
          {index}
        </div>,
      ];
    }
    return arrayOfSteps;
  };

  return renderSteps(numberOfSteps);
}

Steps.propTypes = {
  numberOfSteps: PropTypes.number,
  styleConfig: PropTypes.object,
  activeStep: PropTypes.number,
};

Steps.defaultProps = {
  numberOfSteps: 3,
  styleConfig: {
    activeColor: "#1890ff",
    defaultColor: "lightgrey",
  },
  activeStep: 2,
};

export default Steps;
