import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle scrolling to change navbar color
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Handle window resizing
  function handleResize() {
    setIsMobile(window.innerWidth <= 767);
  }

  // Add/remove event listeners on mount/unmount
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle star functionality
  const [starCount, setStarCount] = useState(0);
  const [hasStarred, setHasStarred] = useState(false);

  useEffect(() => {
    const storedStarCount = localStorage.getItem("starCount");
    const userHasStarred = localStorage.getItem("hasStarred");

    if (storedStarCount) {
      setStarCount(Number(storedStarCount));
    }
    if (userHasStarred) {
      setHasStarred(userHasStarred === "true");
    }
  }, []);

  const handleStarClick = () => {
    if (!hasStarred) {
      const newStarCount = starCount + 1;
      setStarCount(newStarCount);
      setHasStarred(true);

      localStorage.setItem("starCount", newStarCount);
      localStorage.setItem("hasStarred", "true");
    }
  };

  const formatStarCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

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
            <h1>Vasantha Krishnan S</h1>
          </Navbar.Brand>
        )}

        <Nav
          className={`ms-auto nav-links ${isMobile ? "d-flex justify-content-evenly w-100" : ""}`}
          defaultActiveKey="#home"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} />
              {!isMobile && " Home"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} />
              {!isMobile && " About"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
              {!isMobile && " Projects"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} />
              {!isMobile && " Resume"}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
            <Button className="fork-btn-inner" onClick={handleStarClick}>
              <div className="star-container">
                <AiFillStar style={{ fontSize: "1.5em", color: "#c95bf5" }} />
                <span className="star-count">
                  {formatStarCount(starCount)}
                </span>
              </div>
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
