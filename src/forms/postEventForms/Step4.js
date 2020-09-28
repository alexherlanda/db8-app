import React from "react";
import { Form, InputNumber, Input, Col, Row, Radio } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";

function EventsPostForm(props) {
  const { event, ...other } = props;

  const otpionsPositionX = [
    { label: "left", value: "left" },
    { label: "centro", value: "center" },
    { label: "right", value: "right" },
  ];

  return (
    <StepForm previewData={event} {...other}>
      <Row>
        <Col span={24}>
          <Form.Item label="URL del cover del evento" name="coverUrl">
            <Input allowClear />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Posición en X" name="positionX">
          <Radio.Group
            options={otpionsPositionX}
            size="big"
            optionType= "button"
            buttonStyle="outline"
          />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Posición en Y" name="positionY">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
    </StepForm>
  );
}

export default EventsPostForm;
