import React from "react";
import { Form, Col, Row, Typography, Button } from "antd";
import "./styles.css";
import EventCard from "../../molecular/EventCard";

function StepForm(props) {
  const {
    title,
    description,
    onFinishSuccess,
    children,
    onBack,
    step,
    onValuesChange,
    previewData,
    ...other
  } = props;
  const { Title } = Typography;

  const [form] = Form.useForm();

  /* Hanldes  when the user enters all the inputs correctly */
  const handleOnFinishSuccess = (values) => {
    console.log("values", values);
    if (onFinishSuccess) {
      onFinishSuccess(values, step);
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

  const handleOnChange = (changedFields, allFields) => {
    console.log("allfields", allFields);
    if (onValuesChange) onValuesChange(step, allFields, changedFields);
  };

  const middleLayouts = { xs: 24, sm: 24, md: 11, lg: 11, xl: 11, xxl: 12 };

  //TODO: Refactor to get a preview element as a prop
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleOnFinishSuccess}
      onFinishFailed={handleOnFinishFail}
      onValuesChange={(changedFields, allFields) =>
        handleOnChange(changedFields, allFields)
      }
      {...other}
    >
      <Row gutter={16} justify="center">
        <Col
          {...middleLayouts}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              minHeight: "600px",
              width: "98%",
              padding: "15px",
              background: "white",
            }}
          >
            <Title level={3}> {title} </Title>
            <p> {description} </p>
            {children}

            <Row justify="center" gutter={8}>
              <Col span={10}>
                <Form.Item>
                  <Button onClick={handleOnBack} block size="large">
                    Regresar
                  </Button>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item>
                  <Button htmlType="submit" block size="large" type="primary">
                    Siguiente
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          {...middleLayouts}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              minHeight: "600px",
              width: "98%",
              background: "white",
            }}
          >
            <div style={{ padding: "15px" }}>
              <Title level={4}> Vista Previa </Title>
              <p> Esta quedando fantastico </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: "lightgrey",
                padding: 2,
              }}
            >
              <EventCard event={previewData} style={{ width: "100%" }} />
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default StepForm;
