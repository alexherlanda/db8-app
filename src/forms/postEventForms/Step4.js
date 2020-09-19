import React from "react";
import { Form, InputNumber, Input, Col, Row } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";

function EventsPostForm(props) {
  const { event, ...other } = props;


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
            <InputNumber />
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
