import React from "react";
import { Form, Input, DatePicker, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";
import CountriesCatalog from "../../components/atomic/CountriesCatalog";

function EventsPostForm(props) {
  const { ...other } = props;

  return (
    <StepForm
      {...other}
    >
      <Col span={24}>
        <Form.Item label="Nombre del evento" name="name">
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Nombre corto del evento" name="shortName">
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          label="Nombre de la organización"
          name="convenorsCompleteName"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          label="Nombre corto de la organización"
          name="convenorsShortName"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Fecha de inicio del evento" name="startDate">
          <DatePicker />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="Fecha de final del evento" name="endDate">
          <DatePicker />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          label="Descripción del evento"
          name="description"
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item label="País" name="country">
          <CountriesCatalog />
        </Form.Item>
      </Col>
    </StepForm>
  );
}

export default EventsPostForm;
