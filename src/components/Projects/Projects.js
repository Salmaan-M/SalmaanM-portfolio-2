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
import bank from "../../Assets/Projects/bank.png"
import car from "../../Assets/Projects/car.png"
import virtualclassroom from "../../Assets/Projects/virtualclassroom.jpg"
import {
  AiFillGithub
} from "react-icons/ai";
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
              imgPath={wifi}
              isBlog={false}
              title="AI Automation Society – Automated AI Implementation Reports with n8n & Base44"
              description="This project automates generating personalized AI implementation guides. When a business submits a form on the AI Automation Society website, a webhook captures the details, which are processed by two chained AI agents. The system then creates a styled HTML report and emails it to the prospect, including an invite to book a personal strategy call."
              ghLink="https://github.com/Salmaan-M/AI-Automation-Society"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wifi}
              isBlog={false}
              title="ATS Genius"
              description="ATS Genius is a free AI-powered resume analyzer that helps job seekers optimize resumes for Applicant Tracking Systems (ATS) and recruiters. Built on the Puter Platform, it integrates AI, authentication, file storage, key-value storage, and hosting in one seamless solution."
              ghLink="https://github.com/Salmaan-M/ai-resume-analyzer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Constitution Connect"
              description="Constitution Connect is a MERN stack project designed to increase awareness and understanding of the Indian Constitution. It provides interactive content, quizzes, blogs, and user engagement tools built using modern web technologies."
              ghLink="https://github.com/Salmaan-M/constitution-connect"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrptw}
              isBlog={false}
              title="Thinkboard"
              description="A cloud-deployed MERN note-taking app with CRUD, REST API, and rate limiting."
              ghLink="https://github.com/Salmaan-M/mern-thinkboard"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Favorite-movie-app"
              description="A simple React application to display popular movies using a movie API."
              ghLink="https://github.com/Salmaan-M/movie-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evnironment}
              isBlog={false}
              title="Hospital-Management-System"
              description="Hospital Management System is a Java-based application integrated with SQL to manage core hospital operations including patient records, doctor details, appointment scheduling, and data management. It demonstrates CRUD operations via JDBC for database connectivity, enabling efficient handling of hospital workflows."
              ghLink="https://github.com/Salmaan-M/Hospital-Management-System-Using-SQL-and-Java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Endangered species detection"
              description="A MLOPS project where endangered species detection is performed to identify animals"
              ghLink="https://github.com/Salmaan-M/endangered-species"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Console-Todo-App"
              description="A simple command-line Todo application built using Java. This program lets users add, view, mark as done, and delete tasks interactively through a text-based menu."
              ghLink="https://github.com/Salmaan-M/Todo-app-console"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualclassroom}
              isBlog={false}
              title="Virtual-EduSphere"
              description="A Virtual Classroom built with JavaScript featuring student attendance tracking, interactive sessions, and integrated library access for seamless learning."
              ghLink="https://github.com/Salmaan-M/virtual-classroom"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Your Gateway to Books"
              description="A dynamic book-selling website using JavaScript with real-time search, responsive design, secure cart, and admin inventory management."
              ghLink="https://github.com/Salmaan-M/ebookstore"
            />
          </Col>
        
<p style={{ color: "white" }}>
  More projects on GitHub Click here 👉
  <li className="social-icons">
    <a
      href="https://github.com/Salmaan-M"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
      aria-label="GitHub"
     >
    <AiFillGithub />
    </a>
  </li>
</p>

      </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
