import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import Particle from "../Particle";
import OrgContributions from "./OrgContributions";
import organizations from "./contributionsData";

function OpenSource() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Open Source <strong className="purple">Contributions</strong>
        </h1>
        <p style={{ color: "white" }}>
          Pull requests I've submitted to open-source organizations, grouped by
          project.
        </p>

        {organizations.map((org) => (
          <OrgContributions key={org.name} {...org} />
        ))}

        <p style={{ color: "white", marginTop: "2rem" }}>
          More contributions on GitHub — click here 👉
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
      </Container>
    </Container>
  );
}

export default OpenSource;
