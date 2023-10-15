import React from "react";
import PKB from "../assets/Img/pkb.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Menu() {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-danger mt-2 pe-2 text-decoration-none"
      : "text-dark mt-2 pe-2 text-decoration-none";
  return (
    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand>
          <div>
            <img src={PKB} alt="PokeBall" height={50} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <NavLink className={activeClass} to="/">
              {" "}
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <NavLink className={activeClass} to="/pokemon">
              Pokemon
            </NavLink>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
