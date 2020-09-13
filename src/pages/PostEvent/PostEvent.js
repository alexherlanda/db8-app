import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Step1, Step2, Step3 } from "../../forms/postEventForms";
import Steps from "../../components/atomic/Steps";
import "./styles.css";

function PostEvent() {
  const layout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };
  const [activeStep, setActiveStep] = useState(1);
  const [capturedData, setCapturedData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });
  const [isRegisterComplete, setIsRegisterComplete] = useState(false);

  useEffect(() => {
    const merge = {
      ...capturedData.step1,
      ...capturedData.step2,
      ...capturedData.step3,
    };
   if(isRegisterComplete) {
     console.log("merge", merge)
     //TODO: Send request
   }
  }, [capturedData, isRegisterComplete]);

  const saveDataCaptured = (step, data) => {
    setCapturedData({ ...capturedData, [`step${step}`]: data });
  };

  const setNexStep = () => {
    const newStep = activeStep + 1;
    setActiveStep(newStep);
  };

  /* const setPrevStep = () => {
    const newStep = activeStep - 1;
    setActiveStep(newStep);
  } */

  const onFinishStep1 = (formValues) => {
    saveDataCaptured(1, formValues);
    setNexStep();
  };

  const onFinishStep2 = (formValues) => {
    saveDataCaptured(2, formValues);
    setNexStep();
  };

  const onFinishStep3 = (formValues) => {
    saveDataCaptured(3, formValues);
    setIsRegisterComplete(true)
  };

  const getFormByStep = (step) => {
    let Form;
    switch (step) {
      case 1:
        Form = (
          <Step1
            title="Clasificación de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={onFinishStep1}
          />
        );
        break;

      case 2:
        Form = (
          <Step2
            title="Detalles de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={onFinishStep2}
          />
        );
        break;

      case 3:
        Form = (
          <Step3
            title="Enlaces de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={onFinishStep3}
          />
        );
        break;

      default:
        break;
    }
    return Form;
  };

  return (
    <>
      <Row className="postEventRow" justify="center">
        <Steps activeStep={activeStep} />
      </Row>
      <Row gutter={[16, 16]}>
        <Col {...layout}>{getFormByStep(activeStep)}</Col>
      </Row>
    </>
  );
}

export default PostEvent;
