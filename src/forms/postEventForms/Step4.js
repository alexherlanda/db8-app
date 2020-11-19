import React, { useState } from "react";
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

  const [mainButtonIsDisabled, setMainButtonIsDisabled] = useState(true);
  const [keyIsDisabled, setKeyIsDisbaled] = useState(true);

  const handleOnKeyChange = (e) => {
    e.preventDefault();
    const isValidKey =
      e?.target?.value === "green-lion-ohio-roboto" ? true : false;
    setMainButtonIsDisabled(!isValidKey);
  };

  const handleOnOwnerChange = (e) => {
    e.preventDefault();
    const isValidUser =
      e?.target?.value === "jgonzales" || e?.target?.value === "aherland"
        ? true
        : false;
    setKeyIsDisbaled(!isValidUser);
  };

  return (
    <StepForm
      previewData={event}
      mainButtonIsDisabled={mainButtonIsDisabled}
      {...other}
    >
      <Row>
        <Col span={24}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Por favor proporciona una URL de imagen",
              },
            ]}
            label="URL del cover del evento"
            name="coverUrl"
          >
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
              optionType="button"
              buttonStyle="outline"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Posición en Y" name="positionY">
            <InputNumber />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item label="Owner" name="owner">
            <Input onChange={handleOnOwnerChange} />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item label="Llave" name="password">
            <Input disabled={keyIsDisabled} onChange={handleOnKeyChange} />
          </Form.Item>
        </Col>
      </Row>
    </StepForm>
  );
}

export default EventsPostForm;
