import React from "react";
import EventCard from "../../components/molecular/EventCard";
import { event } from "../../models/events";
import { Col, Row, Typography } from "antd";
import EventsPostForm from "../../components/atomic/EventsPostForm";

function PostEvent() {


  const layout = { xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
  return (
    <Row gutter={[16, 16]}>
      <Col {...layout}>
      
 
        <EventsPostForm />
      </Col>

      <Col {...layout}>
     
        <EventCard event={event} />
      </Col>
    </Row>
  );
}

export default PostEvent;
