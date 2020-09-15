import React from "react";
import { Form, Col, Row, Typography, Button } from "antd";
import "./styles.css";

function StepForm(props) {
  const {
    title,
    description,
    onFinishSuccess,
    children,
    onBack,
    step,
    ...other
  } = props;
  const { Title } = Typography;

  const [form] = Form.useForm();

  const buttonLayout = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 };

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

  const handleOnBack = () => {
    const values = form.getFieldsValue();
    if (onBack) {
      onBack(values, step);
    } else {
      console.error(
        "The following user inputs will be lost as you did not pass onBack. Did you forgot to pass onBack prop ? ",
        values
      );
      form.resetFields();
    }
  };

  return (
    <div>
      <Row>
        <Col className="headerForm postEventFormRow" span={24}>
          <Title level={4}> {title} </Title>
          <p> {description} </p>
        </Col>
      </Row>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleOnFinishSuccess}
        onFinishFailed={handleOnFinishFail}
        {...other}
      >
        <Row justify="center">{children}</Row>

        <Row justify="center" gutter={[8, 8]}>
          {onBack && (
            <Col {...buttonLayout}>
              <Form.Item>
                <Button onClick={handleOnBack} block size="large">
                  Regresar
                </Button>
              </Form.Item>
            </Col>
          )}

          <Col {...buttonLayout}>
            <Form.Item>
              <Button htmlType="submit" block size="large" type="primary">
                Siguiente
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default StepForm;
