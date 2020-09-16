import React from "react";
import { Form, Input,  Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";
import EventCard from '../../components/molecular/EventCard'

function EventsPostForm(props) {
  const {event,  ...other } = props;

  return (
    <StepForm
      {...other}
    >
      <Col span={24}>
        <Form.Item label="URL del fondo del evento" name="coverUrl">
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <EventCard event={event} />
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
