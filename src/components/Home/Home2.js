import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  Hello! I am a passionate programmer dedicated to continually upgrading my skills and crafting impactful software solutions.
  <br />
  <br />
  I am well-versed in foundational languages and technologies like 
  <i>
    <b className="purple"> C, Java, and the MERN stack</b>
  </i>
  , and I actively explore innovative approaches to problem-solving using Java.
  <br />
  <br />
  My primary interests lie in building cutting-edge&nbsp;
  <i>
    <b className="purple">web technologies and scalable products</b>
  </i>
  , with a strong enthusiasm for <b className="purple">Artificial Intelligence (AI)</b> and <b className="purple">cloud computing</b>.
  <br />
  <br />
  Whenever I get the opportunity, I enjoy applying my skills in developing full-stack applications with <b className="purple">Node.js</b> and modern JavaScript libraries/frameworks, including&nbsp;
  <i>
    <b className="purple">React.js and Express.js</b>
  </i>
  .
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>
              I’d love to hear about your project, ideas, or anything you'd like
              to share. Whether you have questions or want to collaborate, feel
              free to reach me, and I’ll get back to you as soon as possible.
            </p>
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
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
