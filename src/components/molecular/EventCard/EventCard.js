import React, { useState } from "react";
import { Card, Row, Col, Typography, Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import CountryBadge from "../../atomic/CountryBadge";
import Tags from "../../atomic/Tags";
import DateRange from "../../atomic/DateRange";
import LinkCollection from "../../atomic/LinkCollection";

const { Title } = Typography;

function EventCard(props) {
  const { event, style } = props;
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showLinkCollection, setShowLinkCollection] = useState(false);
  const { t } = useTranslation();

  const handleShowLinksOpen = () => {
    setShowLinkCollection(true);
  };

  const getCoverStyle = (objectEvent, key, defaultValue) => {
    let correspondingStyle;
    if (objectEvent && objectEvent.coverStyle) {
      correspondingStyle = objectEvent.coverStyle[key];
    } else {
      correspondingStyle = defaultValue;
    }
    return correspondingStyle;
  };

  const getBackgroundPosition = (objectEvent, unit = "px") => {
    const x = getCoverStyle(objectEvent, "positionX", 0);
    const y = getCoverStyle(objectEvent, "positionY", 0);
    const position = `${x}${unit} ${y}${unit}`;
    return position;
  };
  return (
    <Card
      hoverable
      style={{
        borderRadius: "15px",
        minHeight: 400,
        backgroundImage: `url('${
          event && event.coverUrl ? event.coverUrl : undefined
        }')`,
        backgroundSize: "cover",
        backgroundPosition: getBackgroundPosition(event),
        ...style,
      }}
      bodyStyle={{ padding: "10px" }}
    >
      <Row
        gutter={8}
        style={{
          display: "flex",
          alignItems: "bottom",
        }}
      >
        <Tags tags={event && event.tags ? event.tags : undefined} />
      </Row>
      <Row
        style={{
          marginTop: "33%",
        }}
      >
        <Col span={24}>
          <Card
            style={{
              borderRadius: "12px",
              minHeight: 250,
            }}
            bodyStyle={{ padding: "10px" }}
          >
            <Row>
              <Col span={24}>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <Modal
                    maskStyle={{ background: "rgba(0, 0, 0, 0.95)" }}
                    title={event && event.name ? event.name : ""}
                    visible={showMoreInfo}
                    destroyOnClose
                    onCancel={() => setShowMoreInfo(false)}
                    footer={
                      <Button
                        type="primary"
                        onClick={() => setShowMoreInfo(false)}
                      >
                        OK
                      </Button>
                    }
                  >
                    <p>
                      {`${event && event.description}. Esta organizado por ${
                        event && event.convenorsCompleteName
                          ? event.convenorsCompleteName
                          : ""
                      }`}
                    </p>
                  </Modal>
                  <Modal
                    title="Participa"
                    visible={showLinkCollection}
                    bodyStyle={{ paddingTop: 45 }}
                    footer={null}
                    onOk={() => setShowLinkCollection(false)}
                    maskStyle={{ background: "rgba(0, 0, 0, 0.95)" }}
                    onCancel={() => setShowLinkCollection(false)}
                  >
                    <LinkCollection
                      linkCollection={
                        event && event.linkCollection
                          ? event.linkCollection
                          : []
                      }
                    />
                  </Modal>
                  <Title
                    level={4}
                    style={{
                      marginRight: "10px",
                      textOverflow: "clip",
                      maxHeight: "27px",
                      overflowY: "hidden",
                    }}
                  >
                    {event && event.shortName ? event.shortName : ""}
                  </Title>
                  <div
                    style={{ color: "grey", fontSize: "11px" }}
                    onClick={() => setShowMoreInfo(true)}
                  >
                    {t("card-showMore")}
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={7} md={6} lg={6} xl={6} xxl={4}>
                <CountryBadge
                  countryLabel={event && event.country ? event.country : ""}
                  countryCode={
                    event && event.countryCode ? event.countryCode : ""
                  }
                />
              </Col>

              <Col style={{ marginTop: 5 }} span={24}>
                {`${t("card-host")} ${
                  event && event.convenorsShortName
                    ? event.convenorsShortName
                    : ""
                }`}
              </Col>

              <Col style={{ marginTop: 5 }} span={24}>
                {event && event.reunionSpot ? event.reunionSpot : ""}
              </Col>
            </Row>

            <Row style={{ display: "flex", justifyContent: "center" }}>
              <DateRange
                locale={t("key-code")}
                startDate={
                  event && event.startDate ? event.startDate : "01-01-21"
                }
                endDate={event && event.endDate ? event.endDate : "01-02-21"}
              />
            </Row>
            <Row
              gutter={[8, 8]}
              style={{
                marginTop: "22px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                <Button
                  //disabled={event.infoLink ? false : true}
                  block
                  href={event && event.infoLink ? event.infoLink : undefined}
                  target="_blank"
                  style={{ borderRadius: "12px" }}
                >
                  {`${t("card-button-knowMore")} `}
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                <Button
                  block
                  onClick={handleShowLinksOpen}
                  style={{ borderRadius: "12px" }}
                >
                  {`${t("card-button-register")} `}
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
