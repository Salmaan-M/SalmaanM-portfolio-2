import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Salmaan M</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
           
            <Col md={7} className="home-about-social">
                      <ul className="home-about-social-links">
                        <li className="social-icons">
                          <a
                            href="https://github.com/Salmaan-M"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/salmaan-m/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=salmaansalmaan114@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiOutlineMail />
                         </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://wa.me/7395816915"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiOutlineWhatsApp />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.instagram.com/itz.salmaan_"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiFillInstagram />
                          </a>
                        </li>
                      </ul>
                    </Col>   
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
          <Home2 />
    </section>
  );
}

export default Home;
