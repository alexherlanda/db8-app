import React from "react";
import { Form, Input, Space, Button } from "antd";
import "./styles.css";
import StepForm from "../../components/atomic/StepForm";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function Step3(props) {
  const {...other} = props
  return (
    <StepForm {...other}>
      <Form.List name="linkCollection">
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
                    rules={[{ required: true, message: "Missing first name" }]}
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
    </StepForm>
  );
}

export default Step3;
