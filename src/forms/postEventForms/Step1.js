import React from "react";
import { Form, Typography, Radio, Button, Row, Col } from "antd";
import "./styles.css";

function EventsPostForm(props) {
  const { onFinishSuccess } = props;
  const { Title } = Typography;

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

  const buttonLayout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };

  /* Hanldes  when the user enters all the inputs correctly */
  const handleOnFinishSuccess = (values) => {
    if (onFinishSuccess) {
      onFinishSuccess(values);
    }
  };

  /* Hanldes  when the user don't enter all the inputs correctly */
  const handleOnFinishFail = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="postEventFormContainer">
      <Row>
        <Col className="headerForm postEventFormRow" span={24}>
          <Title level={4}> Información general </Title>
          <p> Cuentanos por favor la información general del evento </p>
        </Col>
      </Row>

      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnFinishSuccess}
        onFinishFailed={handleOnFinishFail}
      >
        <Row>
          <Col span={24}>
            <Form.Item label="Tipo de evento" name="type">
              <Radio.Group
                options={eventTypeOptions}
                {...optionGrupCommonProps}
              />
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
              <Radio.Group
                options={formatTypeOptions}
                {...optionGrupCommonProps}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Idioma principal del evento" name="language">
              <Radio.Group
                options={languageOptions}
                {...optionGrupCommonProps}
              />
            </Form.Item>
          </Col>
        </Row>

        <Col {...buttonLayout}>
          <Form.Item>
            <Button
              htmlType="submit"
              block
              size="large"
              type="primary"
            >
              Siguiente
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
}

export default EventsPostForm;
