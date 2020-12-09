import React from "react";
import {
  Drawer,
  Typography,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Button,
} from "antd";
import CountriesCatalog from "../../atomic/CountriesCatalog";
import { connect } from "react-redux";
import { listEventsRequest } from "../../../redux/actions/eventsActions";

const FiltersDrawer = (props) => {
  const { Title, Paragraph } = Typography;
  const { RangePicker } = DatePicker;
  const {
    visible,
    onClose,
    onFinish,
    listEventsRequest: listEventsReq,
  } = props;

  const handleOnFinish = (values) => {
    listEventsReq({
      ...values,
      all: true,
      months: "01-10-2020",
      dates: "01-10-2020",
    });
    if (onFinish) onFinish(values);
  };

  return (
    <Drawer
      bodyStyle={{
        padding: 25,
      }}
      onClose={onClose}
      placement="bottom"
      height="100%%"
      visible={visible}
    >
      <Form layout="vertical" onFinish={handleOnFinish}>
        <Row>
          <Col>
            <Title level={2}> Encuentra tus eventos favoritos</Title>
          </Col>
          <Col>
            <Paragraph>
              Los torneos que vienen y los que hicieron historia
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Title level={4}>Filtros</Title>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
            <Form.Item label="Palabras clave" name="search">
              <Input placeholder="Nombre del torneo, anfitrión" />
            </Form.Item>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
            <Form.Item label="Periodo inicial" name="months">
              <RangePicker />
            </Form.Item>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
            <Form.Item label="Periodo final" name="endeDate">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
            <Form.Item label="Países" name="countries">
              <CountriesCatalog />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end" gutter={[16, 16]}>
          <Button size="large" style={{ marginRight: 5 }} htmlType="reset">
            Limpiar
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            Aplicar
          </Button>
        </Row>
      </Form>
    </Drawer>
  );
};

const mapDispatchToProps = { listEventsRequest };
export default connect(null, mapDispatchToProps)(FiltersDrawer);
