import React from "react";
import { Form, Input, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";

function EventsPostForm(props) {
  const { event, ...other } = props;

  return (
    <StepForm previewData={event} {...other}>
      <Col span={24}>
        <Form.Item label="URL del fondo del evento" name="coverUrl">
          <Input />
        </Form.Item>
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
