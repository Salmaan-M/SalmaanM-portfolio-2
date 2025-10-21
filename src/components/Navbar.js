import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function handleResize() {
    setIsMobile(window.innerWidth <= 767);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {!isMobile && (
          <Navbar.Brand href="/" className="d-flex">
            <h1>Salmaan M</h1>
          </Navbar.Brand>
        )}

        <Nav
          className={`ms-auto nav-links ${isMobile ? "d-flex justify-content-evenly w-100" : ""}`}
          defaultActiveKey="#home"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} />
              {!isMobile && "  Home"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} />
              {!isMobile && "  About"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
              {!isMobile && "  Projects"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} />
              {!isMobile && "  Resume"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
