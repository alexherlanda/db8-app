import React from "react";
import { Form, Radio, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";
import CountriesCatalog from "../../components/atomic/CountriesCatalog";

function EventsPostForm(props) {
  const { event, ...other } = props;

  const attendanceTypeOptions = [
    { label: "Presencial", value: 0 },
    { label: "Virtual", value: 1 },
  ];

  const eventTypeOptions = [
    { label: "Torneo", value: 0 },
    { label: "Taller", value: 1 },
  ];

  const formatTypeOptions = [
    { label: "BP", value: "BP" },
    { label: "WUSDC", value: "WSDC" },
    { label: "Karl Popper", value: "Karl Popper" },
    { label: "NP", value: "NP" },
    { label: "Public Forum", value: "Public Forum" },
  ];

  const languageOptions = [
    { label: "EN", value: 0 },
    { label: "ES", value: 1 },
    { label: "PT", value: 2 },
  ];

  const optionGrupCommonProps = {
    size: "big",
    optionType: "button",
    buttonStyle: "outline",
  };

  return (
    <StepForm previewData={event} {...other}>
      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor indica el tipo del evento",
            },
          ]}
          label="Tipo de evento"
          name="type"
        >
          <Radio.Group options={eventTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor indica el tipo de asistencia del evento",
            },
          ]}
          label="Tipo de asistencia"
          name="attendanceType"
        >
          <Radio.Group
            options={attendanceTypeOptions}
            {...optionGrupCommonProps}
          />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor indica el formato del evento",
            },
          ]}
          label="Formato del evento"
          name="formatType"
        >
          <Radio.Group options={formatTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor indica el idioma del evento",
            },
          ]}
          label="Idioma principal del evento"
          name="language"
        >
          <Radio.Group options={languageOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor indica el país del evento",
            },
          ]}
          label="País"
          name="country"
        >
          <CountriesCatalog />
        </Form.Item>
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
