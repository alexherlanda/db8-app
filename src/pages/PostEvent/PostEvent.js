import React, { useState } from "react";
import { Col, Row } from "antd";
import { Step1 } from "../../forms/postEventForms";
import Steps from "../../components/atomic/Steps";
import "./styles.css";

function PostEvent() {
  const layout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };
  const [activeStep, setActiveStep] = useState(1);
  const [capturedData, setCapturedData] = useState({});


  const onFinishStepOne = formValues => {
    setCapturedData({step1: formValues });
    setActiveStep(2);
    console.log('capturedData', capturedData)
  };

  
  const getForm = step => {
    let Form
    switch (step) {
      case 1:
       Form = <Step1 onFinishSuccess={onFinishStepOne} />
        break;
    
      default:
        break;
    }
    return Form
  }

  //TODO: Function to get the form based in the current step
  return (
    <>
      <Row className="postEventRow" justify="center">
        <Steps activeStep={activeStep} />
      </Row>
      <Row gutter={[16, 16]}>
        <Col {...layout}>
         {getForm(1)}
        </Col>
      </Row>
    </>
  );
}

export default PostEvent;
