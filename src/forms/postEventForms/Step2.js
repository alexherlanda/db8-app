import React from "react";
import { Form, Input, DatePicker, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";

function EventsPostForm(props) {
  const { event, ...other } = props;
  const { TextArea } = Input;

  return (
    <StepForm previewData={event} {...other}>
      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor introduce el nombre corto del evento",
            },
          ]}
          label="Nombre corto del evento"
          name="shortName"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor introduce el nombre corto de la organización",
            },
          ]}
          label="Nombre corto de la organización"
          name="convenorsShortName"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor introduce la fecha en que el evento inicia",
            },
          ]}
          label="Fecha de inicio del evento"
          name="startDate"
        >
          <DatePicker />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor introduce la fecha en que el evento termina",
            },
          ]}
          label="Fecha de final del evento"
          name="endDate"
        >
          <DatePicker />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Por favor el nombre completo del evento",
            },
          ]}
          label="Nombre largo del evento"
          name="name"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              required: true,
              message:
                "Por favor introduce el nombre completo de la organización",
            },
          ]}
          label="Nombre completo de la organización"
          name="convenorsCompleteName"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          rules={[
            {
              max: 240,
              required: false,
              message: "Por favor proporciona una descripción del evento",
            },
          ]}
          label="Descripción del evento"
          name="description"
        >
          <TextArea />
        </Form.Item>
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
