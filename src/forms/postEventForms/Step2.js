import React from "react";
import {
  Form,
  Input,
  Typography,
  Space,
  Radio,
  DatePicker,
  Button,
} from "antd";
import CountriesCatalog from "../../components/atomic/CountriesCatalog";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

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

  const formatTypeOptions = [
    { label: "BP", value: 0 },
    { label: "WUSDC", value: 1 },
    { label: "Karl Popper", value: 2 },
  ];

  const languageOptions = [
    { label: "EN", value: 0 },
    { label: "ES", value: 1 },
    { label: "PT", value: 2 },
  ];

  const optionGrupCommonProps = {
    size: "big",
    optionType: "button",
    buttonStyle: "outline",
  };

  return (
    <div>
      <Title level={3}> Crear nuevo evento </Title>
      <Paragraph>Por favor llene esta información</Paragraph>
      <Form layout="vertical">
        <Form.Item label="Tipo de evento" name="type">
          <Radio.Group options={eventTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>

        <Form.Item label="Tipo de asistencia" name="attendanceType">
          <Radio.Group
            options={attendanceTypeOptions}
            {...optionGrupCommonProps}
          />
        </Form.Item>

        <Form.Item label="Formato del evento" name="formatType">
          <Radio.Group options={formatTypeOptions} {...optionGrupCommonProps} />
        </Form.Item>

        <Form.Item label="Idioma principal del evento" name="language">
          <Radio.Group options={languageOptions} {...optionGrupCommonProps} />
        </Form.Item>

        <Form.Item label="Nombre del evento" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Nombre corto del evento" name="shortName">
          <Input />
        </Form.Item>

        <Form.Item
          label="Nombre de la organización"
          name="convenorsCompleteName"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nombre corto de la organización"
          name="convenorsShortName"
        >
          <Input />
        </Form.Item>

        <Form.Item label="Fecha de inicio del evento" name="startDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Fecha de final del evento" name="endDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="País" name="country">
          <CountriesCatalog />
        </Form.Item>

        <Form.Item
          label="Dirección de la imagen para arte de la tarjeta"
          name="coverUrl"
        >
          <Input />
        </Form.Item>

        <Form.Item label="Link de información" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Plataforma/Punto de reunión" name="reunionSpot">
          <Input />
        </Form.Item>

        <Title level={4}> Crear nuevo evento </Title>
        <Paragraph>Por favor llene esta información</Paragraph>
        <Form.List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="start"
                  >
                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                    <Form.Item
                      {...field}
                      name={[field.name, "first"]}
                      fieldKey={[field.fieldKey, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "last"]}
                      fieldKey={[field.fieldKey, "last"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Space>
                ))}

                <Form.Item>
                  {fields.length < 6 && (
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      Agregar un link <PlusOutlined />
                    </Button>
                  )}
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form>
    </div>
  );
}

export default EventsPostForm;
