import React from "react";
import { Form, Col, Row, Typography, Button } from "antd";
import "./styles.css";

function StepForm(props) {
  const { title, description, onFinishSuccess, children, ...other } = props;
  const { Title } = Typography;

  const buttonLayout = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 };

  /* Hanldes  when the user enters all the inputs correctly */
  const handleOnFinishSuccess = (values) => {
    if (onFinishSuccess) {
      onFinishSuccess(values);
    }
  };

  /* Hanldes  when the user don't enter all the inputs correctly */
  const handleOnFinishFail = (errorInfo) => {
    console.warn("Form validation failed:", errorInfo);
  };

  return (
    <div className="postEventFormContainer">
      <Row>
        <Col className="headerForm postEventFormRow" span={24}>
          <Title level={4}> {title} </Title>
          <p> {description} </p>
        </Col>
      </Row>
      <Form
        layout="vertical"
        onFinish={handleOnFinishSuccess}
        onFinishFailed={handleOnFinishFail}
        {...other}
      >
        <Row>{children}</Row>
        <Col {...buttonLayout}>
          <Form.Item>
            <Button htmlType="submit" block size="large" type="primary">
              Siguiente
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
}

export default StepForm;
