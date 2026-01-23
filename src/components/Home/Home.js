import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="home-wrapper">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave emoji">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">Salmaan M</strong>
              </h1>
              <div style={{ padding: 38, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            {/* RIGHT SIDE */}
            <Col md={5} className="home-image-container">
              <img
                src={homeLogo}
                alt="Salmaan M - Developer avatar"
                className="img-fluid home-image"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div style={{ marginTop: "-80px" }}>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
