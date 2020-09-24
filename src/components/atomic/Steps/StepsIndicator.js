import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Steps(props) {
  const { numberOfSteps, styleConfig, activeStep, onStepClick } = props;

  const getStepStyle = (step) => {
    let style;
    if (step < activeStep) {
      style = {
        color: "black",
        background: "white",
        border: `1px solid ${styleConfig.activeColor}`,
      };
    } else if (step === activeStep) {
      style = {
        background: styleConfig.activeColor,
        width: "45px",
        height: "45px",
      };
    } else {
      style = {
        color: "grey",
        background: "white",
        border: `1px solid lightgrey`,
        opacity: "70%",
      };
    }
    return style;
  };

  const createDataSource = (elementsToCreate) => {
    let dataSource = [];
    for (let index = 1; index <= elementsToCreate; index++) {
      dataSource = [...dataSource, { key: index }];
    }
    return dataSource;
  };

  const handleOnStepClick = (step) => {
    if(onStepClick) onStepClick(step)
  }

  return (
    <div className="stepRootContainer">
      {createDataSource(numberOfSteps).map((step) => {
        return (
          <div
            onClick={() => handleOnStepClick(step.key)}
            key={step.key}
            style={getStepStyle(step.key)}
            className="stepContainer"
          >
            {step.key}
          </div>
        );
      })}
    </div>
  );
}

Steps.propTypes = {
  onStepClick: PropTypes.func,
  numberOfSteps: PropTypes.number,
  styleConfig: PropTypes.object,
  activeStep: PropTypes.number,
};

Steps.defaultProps = {
  onStepClick: null,
  numberOfSteps: 3,
  styleConfig: {
    activeColor: "#63B4FF",
    defaultColor: "lightgrey",
  },
  activeStep: 2,
};

export default Steps;
