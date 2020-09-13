import React from "react";
import { Form, Radio, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";

function EventsPostForm(props) {
  const { ...other } = props;

  const attendanceTypeOptions = [
    { label: "Presencial", value: 0 },
    { label: "Virtual", value: 1 },
  ];

  const eventTypeOptions = [
    { label: "Torneo", value: 0 },
    { label: "Taller", value: 1 },
  ];

  const formatTypeOptions = [
    { label: "BP", value: 0 },
    { label: "WUSDC", value: 1 },
    { label: "Karl Popper", value: 2 },
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
    <StepForm {...other}>
      <Col span={24}>
        <Form.Item label="Tipo de evento" name="type">
          <Radio.Group options={eventTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Tipo de asistencia" name="attendanceType">
          <Radio.Group
            options={attendanceTypeOptions}
            {...optionGrupCommonProps}
          />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Formato del evento" name="formatType">
          <Radio.Group options={formatTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Idioma principal del evento" name="language">
          <Radio.Group options={languageOptions} {...optionGrupCommonProps} />
        </Form.Item>
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
