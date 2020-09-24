import React from "react";
import { Form, Input, Space, Button, Col } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function Step3(props) {
  const { event, ...other } = props;

  return (
    <StepForm previewData={event} {...other}>
      <Col span={24}>
        <Form.Item label="URL de información" name="infoLink">
          <Input />
        </Form.Item>
      </Col>

      <Form.List name="linkCollection">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  //style={{ display: "flex", marginBottom: 8 }}
                  align="start"
                >
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                  <Form.Item
                    {...field}
                    name={[field.name, "label"]}
                    fieldKey={[field.fieldKey, "label"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Titulo del enlance" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "link"]}
                    fieldKey={[field.fieldKey, "link"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="URL" />
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
                    Agregar otro enlace <PlusOutlined />
                  </Button>
                )}
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </StepForm>
  );
}

export default Step3;
