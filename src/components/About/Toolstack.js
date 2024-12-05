import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiCanva,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
    </Row>
  );
}

export default Toolstack;
