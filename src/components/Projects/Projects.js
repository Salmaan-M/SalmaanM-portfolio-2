import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wifi from "../../Assets/Projects/wifi.png"
import vrptw from "../../Assets/Projects/vrptw.png"
import book from "../../Assets/Projects/book.png"
import snake from "../../Assets/Projects/snake.png"
import evnironment from "../../Assets/Projects/environment.png"
import space from "../../Assets/Projects/space.png"
import emotion from "../../Assets/Projects/emotion.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Your Gateway to Books"
              description="A dynamic book-selling website using JavaScript with real-time search, responsive design, secure cart, and admin inventory management."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="EduSphere"
              description="A Virtual Classroom built with JavaScript featuring student attendance tracking, interactive sessions, and integrated library access for seamless learning."
              ghLink="https://github.com/vasanthkrishnan/virtual-class-room"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrptw}
              isBlog={false}
              title="OptiRoute"
              description="A JavaScript project solving the Vehicle Routing Problem with Time Windows using Clarke-Wright Savings and Genetic Algorithms, featuring interactive maps and optimized route visualization."
              ghLink="https://github.com/vasanthkrishnan/Vehicle-Routing-problem-with-time-windows"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wifi}
              isBlog={false}
              title="HostelConnect"
              description="A MERN-based hostel system where the admin registers students' devices with MAC addresses. Students mark attendance only on registered devices connected to WiFi, active for 1.5 hours."
              ghLink="https://github.com/vasanthkrishnan/ee-project-5"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="GalaxyDefender"
              description="A Java-based Space Invaders game where players control a spaceship, shoot enemy aliens, and dodge attacks. Features smooth gameplay, bullet count, and game-over conditions when bullets run out."
              ghLink="https://github.com/vasanthkrishnan/space-invaders-game-java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="SnakeX"
              description="A classic Snake game developed in Java, featuring smooth controls, dynamic gameplay, and score tracking. Players navigate the snake to eat food while avoiding collisions."
              ghLink="https://github.com/vasanthkrishnan/snake-game-java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evnironment}
              isBlog={false}
              title="EcoSphere"
              description="An Environment Awareness website built with MERN stack, promoting sustainability through interactive features, informative content, and user engagement to inspire eco-friendly actions and track environmental impact effectively."
              ghLink="https://github.com/vasanthkrishnan/envirnment-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="BankEase Control System"
              description="A Java console banking system enabling users to check balance, transfer funds, view transaction history, request cheque books, and empowering admins to manage customers, oversee transactions, and monitor bank balances."
              ghLink="https://github.com/vasanthkrishnan/bank-application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AutoHire"
              description="AutoHire is a Java and MySQL-based car rental management system, offering features like customer registration, car bookings, inventory management, and rental history tracking, providing an efficient solution for rental businesses."
              ghLink="https://github.com/vasanthkrishnan/car-rental-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
