import React from "react";
import EventCard from "../../components/molecular/EventCard";
import { Typography } from "antd";

function PreviewCard(props) {
  const { Title } = Typography;
  const { previewData } = props;

  return (
    <div
      style={{
        minHeight: "600px",
        width: "98%",
        background: "white",
      }}
    >
      <div style={{ padding: "15px" }}>
        <Title level={4}> Vista Previa </Title>
        <p> Esta quedando fantastico </p>
      </div>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "lightgrey",
            padding: 2,
          }}
        >
          <EventCard event={previewData} style={{ width: "100%" }} />
        </div>
      </>
    </div>
  );
}

export default PreviewCard;
