import React, { useState, useEffect } from "react";
import { Row } from "antd";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  PreviewCard,
} from "../../forms/postEventForms";
import Steps from "../../components/atomic/Steps";
import { scroller } from "react-scroll";
import "./styles.css";
import { connect } from "react-redux";
import { postEventsRequest } from "../../redux/actions/eventsActions";
import { useHistory } from "react-router-dom";

function PostEvent(props) {
  const { postEventsRequest: postEventReq, isPosting } = props;
  const { push } = useHistory();

  const [activeStep, setActiveStep] = useState(1);

  const [capturedData, setCapturedData] = useState({
    step1: {},
    step2: {},
    step3: { linkCollection: [] },
    step4: {
      positionX: 0,
      positionY: 0,
    },
  });
  const [event, setEvent] = useState({});

  useEffect(() => {
    // Merges captured data into one object
    const merge = {
      ...capturedData.step1,
      ...capturedData.step2,
      ...capturedData.step3,
      ...capturedData.step4,
    };

    //Adds and groups keys for request as defined in model an API
    const newEvent = {
      ...merge,
      countryCode: merge.country,
      tags: [
        { key: "type", value: merge?.type },
        { key: "attendanceType", value: merge?.attendanceType },
        { key: "formatType", text: merge?.formatType },
      ],
      coverStyle: {
        positionX: merge?.positionX,
        positionY: merge?.positionY,
      },
      linkCollection: [...merge?.linkCollection],
    };

    //Removes keys that are not required by the API a
    delete newEvent["attendanceType"];
    delete newEvent["formatType"];
    delete newEvent["type"];
    delete newEvent["positionX"];
    delete newEvent["positionY"];
    //Saves the event for access
    setEvent(newEvent);
  }, [capturedData]);

  //This function saves the captured data of the user to the state
  const saveDataCaptured = (step, data) => {
    setCapturedData({ ...capturedData, [`step${step}`]: data });
  };

  const goToNextStep = () => {
    const newStep = activeStep + 1;
    setActiveStep(newStep);
    scroller.scrollTo("header");
  };

  const goToPreviousStep = () => {
    const newStep = activeStep - 1;
    setActiveStep(newStep);
    scroller.scrollTo("header");
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

  const handleOnStepClick = (step) => {};

  const hadleCustomization = (step, formValues) => {
    saveDataCaptured(step, formValues);
  };

  const formCommonProps = {
    onBack: handleOnBack,
  };

  const previewData = {
    event: event,
    previewNode: PreviewCard,
  };

  const postEvent = () => {
    const onSuccess = () => {
      push("/events/post/sucess");
    };
    postEventReq({ event: event, onSuccess: onSuccess });
  };

  const getFormByStep = (step) => {
    let Form;
    switch (step) {
      case 1:
        Form = (
          <Step1
            title="Clasificación de tu evento"
            description="Proporciona algunas categorías que ayudaran a la gente a entender tu evento"
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
            description="Proporciona la información más importante de tú evento para que todo el mundo pueda asistir"
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
            description="Agrega una colección de enlaces para tú audiencia. Debes agregar un enlace para obtener más información de tu evento pero puedes agregar más enlaces por ejemplo de tu convocatoria o la plataforma de inscripción."
            onFinishSuccess={handleOnNext}
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
            title="Decoración de tu evento"
            description="Agrega un detalle que hará que tu evento se vea genial. Copia y pega la dirección de una imagen que represente tu evento y personaliza tu imagen."
            step={4}
            event={event}
            onValuesChange={hadleCustomization}
            initialValues={capturedData.step4}
            onFinish={postEvent}
            mainButtonIsLoading={isPosting}
            mainButtonLabel="Registrar"
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
      <Row className="postEventRow" justify="center">
        <Steps
          numberOfSteps={4}
          activeStep={activeStep}
          onStepClick={handleOnStepClick}
        />
      </Row>

      {getFormByStep(activeStep)}
    </>
  );
}

function mapStateToProps(state) {
  return {
    isPosting: state?.events?.postingEvent?.isPosting,
  };
}

export default connect(mapStateToProps, { postEventsRequest })(PostEvent);
