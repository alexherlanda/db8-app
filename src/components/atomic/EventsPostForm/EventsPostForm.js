import React from "react";
import { Form, Input, Card, Typography, Radio } from "antd";

function EventsPostForm(props) {
  const { Title, Paragraph } = Typography;

  const attendanceTypeOptions = [
    { label: "Presencial", value: 0 },
    { label: "Virtual", value: 1 },
  ];

  const eventTypeOptions = [
    { label: "Torneo", value: 0 },
    { label: "Taller", value: 1 },
  ];

  const optionGrupCommonProps = {
    size: 'big', 
    optionType: 'button', 
    buttonStyle: 'outline'
  }

  return (
    <Card>
      <Title level={3}> Crear nuevo evento </Title>
      <Paragraph>Por favor llene esta información</Paragraph>
      <Form layout="vertical" style={{ marginTop: 50 }}>



      <Form.Item label="Tipo de evento" name="type">
          <Radio.Group
            options={eventTypeOptions}
            {...optionGrupCommonProps}
          />
        </Form.Item>

        <Form.Item label="Tipo de asistencia" name="attendanceType">
          <Radio.Group
            options={attendanceTypeOptions}
           {...optionGrupCommonProps}
          />
        </Form.Item>

        <Form.Item label="Formato del evento" name="type">
          <Radio.Group
            options={eventTypeOptions}
            {...optionGrupCommonProps}
          />
        </Form.Item>

        <Form.Item label="Nombre del evento" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Nombre corto del evento" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Organización" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Nombre corto de la organización" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="País" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Link de información" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Plataforma/Punto de reunión" name="username">
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default EventsPostForm;
