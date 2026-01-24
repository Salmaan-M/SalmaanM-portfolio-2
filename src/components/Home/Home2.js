import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
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


  const experiences = [
    {
      title: "Open Source Contributer - FOSSASIA",
      duration: "Jan 2026 - Present",
      description: "I fix bugs, and documention. Check out my github for PRs and MRs"
    },
    
  ];

  const tiltOptions = {
    max: 25,
    scale: 1.05,
    speed: 1000,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm a passionate full-stack developer dedicated to crafting scalable web solutions and integrating AI innovations.
              <br />
              <br />
              Proficient in core technologies like <i><b className="purple">C, Java, and the MERN stack</b></i>, I thrive on building robust applications with <b className="purple">Node.js</b>, <b className="purple">React.js</b>, and <b className="purple">Express.js</b>.
              <br />
              <br />
              My focus: cutting-edge <i><b className="purple">web technologies</b></i>, <b className="purple">Artificial Intelligence</b>, and <b className="purple">cloud computing</b> to solve real-world problems.
            </p>
            
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt options={tiltOptions}>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="Salmaan M - Full-stack developer avatar" 
                style={{ maxHeight: "400px" }}
              />
            </Tilt>
          </Col>
        </Row>
        {/* New Experience Section */}
        <Row className="mt-5">
          <Col md={12}>
            <h2 className="purple" style={{ fontSize: "2.2em", textAlign: "center" }}>
              Professional <span className="purple">Experience</span>
            </h2>
            <div className="timeline mt-5">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item mb-4 position-relative">
                  <div className="timeline-dot position-absolute"></div>
                  <div className="timeline-content ps-5">
                    <h5 className="mb-1">{exp.title} <Badge bg="purple">{exp.company}</Badge></h5>
                    <p className="text-muted mb-2 fs-6">{exp.duration}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <p>
              I'd love to hear about your projects, ideas, or collaboration opportunities. Reach out—I'll respond promptly!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Salmaan-M"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salmaan-m/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=salmaansalmaan114@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Email Salmaan"
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
                  aria-label="WhatsApp chat"
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
                  aria-label="Instagram profile"
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
