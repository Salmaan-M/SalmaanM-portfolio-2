import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vasantha Krishnan S </span>
            from <span className="purple"> Madurai, India.</span>
            <br />
            <br />
            I am currently pursuing my Bachelor's degree at Sri Shakthi Institute of Engineering and Technology, Coimbatore.
            <br />
            <br />
            I am a dedicated developer specializing in Java, Python, MERN, JavaScript, and MongoDB, with experience in web development, algorithmic problem-solving, and interactive visualizations. I enjoy crafting efficient solutions, learning new technologies, and blending creativity with technical expertise to deliver impactful results.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <footer className="blockquote-footer">Vasantha Krishnan S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
