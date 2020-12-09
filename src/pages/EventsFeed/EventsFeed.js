import React, { useEffect, useState } from "react";
import { Row, Card, Col, List } from "antd";
import { connect } from "react-redux";
import { listEventsRequest } from "../../redux/actions/eventsActions";
import EventCard from "../../components/molecular/EventCard";
import FiltersDrawer from "../../components/molecular/FiltersDrawer";

import { useTranslation } from "react-i18next";

function EventsFeed(props) {
  const { listEventsRequest: listEventsReq, events } = props;
  const { t } = useTranslation();

  const [filtersAreVisible, setFiltersAreVisible] = useState(true);

  const closeFilers = () => {
    setFiltersAreVisible(false);
  };

  useEffect(() => {
    listEventsReq();
  }, [listEventsReq]);

  return (
    <>
      <FiltersDrawer
        visible={filtersAreVisible}
        onClose={closeFilers}
        onFinish={closeFilers}
      />
      <Row>
        <Col span={24}>
          <Card
            bodyStyle={{ padding: 0 }}
            style={{
              borderRadius: "22px",
              marginBottom: "12px",
              padding: 0,
            }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                minHeight: "50px",
                alignItems: "flex-end",
              }}
            >
              <Col
                onClick={() => listEventsReq()}
                style={{
                  alignItems: "flex-end",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  borderBottom: "2px solid #1890ff",
                  height: "100%",
                  padding: "10px",
                }}
              >
                {t("main-bar-explore")}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        loading={events.isLoading}
        dataSource={events.data}
        renderItem={(event) => (
          <List.Item>
            <EventCard event={event} />
          </List.Item>
        )}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events.eventsList,
  };
}

export default connect(mapStateToProps, { listEventsRequest })(EventsFeed);
