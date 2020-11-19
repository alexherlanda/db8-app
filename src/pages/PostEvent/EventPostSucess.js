import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
const EventPostSuccess = () => {
  const { push } = useHistory();

  const handleGoToHomeClick = () => {
    push("/");
  };

  const handleRegisterAnother = () => {
    push("/events/post");
  };

  return (
    <Result
      status="success"
      title="Tu evento se publico exitosamente"
      subTitle="Gracias por registrar tu evento en la base de datos más importante del mundo del debate competitivo"
      extra={[
        <Button type="primary" key="console" onClick={handleGoToHomeClick}>
          Regresar al Inicio
        </Button>,
        <Button key="buy" onClick={handleRegisterAnother}>
          Registrar otro evento
        </Button>,
      ]}
    />
  );
};

export default EventPostSuccess;
