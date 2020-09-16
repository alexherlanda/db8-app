import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Step1, Step2, Step3, Step4 } from "../../forms/postEventForms";
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
  const [event, setEvent] = useState({});

  useEffect(() => {
    // Merges captured data into one object
    const merge = {
      ...capturedData.step1,
      ...capturedData.step2,
      ...capturedData.step3,
      ...capturedData.step4,
    };
    if (true) {
      //Adds and groups keys for request as defined in model an API
      const newEvent = {
        ...merge,
        countryCode: merge.country,
        tags: [
          { key: "type", value: merge.type },
          { key: "attendanceType", value: merge.attendanceType },
          { key: "formatType", text: merge.formatType },
        ],
      };
      //Removes keys that are not required by the API a
      delete newEvent["attendanceType"];
      delete newEvent["formatType"];
      delete newEvent["type"];
      setEvent(newEvent);
      console.log("event", newEvent);
      //TODO: Send request
    }
  }, [capturedData, isRegisterComplete]);

  const saveDataCaptured = (step, data) => {
    setCapturedData({ ...capturedData, [`step${step}`]: data });
  };

  const goToNextStep = () => {
    const newStep = activeStep + 1;
    setActiveStep(newStep);
  };

  const goToPreviousStep = () => {
    const newStep = activeStep - 1;
    setActiveStep(newStep);
  };

  const handleOnNext = (formValues, step) => {
    saveDataCaptured(step, formValues);
    goToNextStep();
  };

  const handleOnBack = (formValues, step) => {
    saveDataCaptured(step, formValues);
    if (step !== 1) {
      goToPreviousStep();
    }
  };

  const handleOnStepClick = (step) => {
    console.log(step);
  };

  const handleOnStep3Finish = (step, formValues) => {
    saveDataCaptured(step, formValues);
    setIsRegisterComplete(true);
    goToNextStep();
  };

  const hadleCustomization = (step, formValues) => {
    saveDataCaptured(step, formValues);
    setIsRegisterComplete(true);
  };

  const formCommonProps = {
    onBack: handleOnBack,
  };

  const previewData = {
    event: event,
  };

  const getFormByStep = (step) => {
    let Form;
    switch (step) {
      case 1:
        Form = (
          <Step1
            title="Clasificación de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={handleOnNext}
            step={1}
            initialValues={capturedData.step1}
            onValuesChange={hadleCustomization}
            {...previewData}
          />
        );
        break;

      case 2:
        Form = (
          <Step2
            title="Detalles de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={handleOnNext}
            step={2}
            onValuesChange={hadleCustomization}
            initialValues={capturedData.step2}
            {...formCommonProps}
            {...previewData}
          />
        );
        break;

      case 3:
        Form = (
          <Step3
            title="Enlaces de tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={handleOnStep3Finish}
            step={3}
            onValuesChange={hadleCustomization}
            initialValues={capturedData.step3}
            {...formCommonProps}
            {...previewData}
          />
        );
        break;

      case 4:
        Form = (
          <Step4
            title="Personaliza tu evento"
            description="Ayuda a tu audiencia a llegar a tu evento proporcionado algunas clasificacioes de tu evento como formato o idioma"
            onFinishSuccess={handleOnNext}
            step={4}
            event={event}
            onValuesChange={hadleCustomization}
            {...formCommonProps}
            {...previewData}
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
      <Col span={12}></Col>
      <Row className="postEventRow" justify="center">
        <Steps
          numberOfSteps={4}
          activeStep={activeStep}
          onStepClick={handleOnStepClick}
        />
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col {...layout}>{getFormByStep(activeStep)}</Col>
      </Row>
    </>
  );
}

export default PostEvent;
