import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import dumbflix from "../img/dumbflix.png";
import userPhoto from "../img/user.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaUser, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";

const Head = ({}) => {
  const [isLogin, setIsLogin] = useState(true);
  // useEffect(() => {
  //   if (user) setIsLogin(true);
  //   else setIsLogin(false);
  // }, [user]);

  return (
    <Navbar bg="dark" expand="lg" className="sticky-sm-top">
      <Container className="ms-5">
        <Navbar.Brand href="#home">
          <img
            src={dumbflix}
            width="130"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
      {isLogin ? (
        <Dropdown className="me-5">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <img src={userPhoto} width={35} alt="user" />
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item as={Link} to="/profile">
              <FaUser className="text-danger ms-2" /> Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/payment">
              <FaMoneyCheckAlt className="text-danger ms-2" /> Pay
            </Dropdown.Item>
            <Dropdown.Divider className="bg-light dropDivid" />
            <Dropdown.Item href="#/action-3" onClick={() => setIsLogin(false)}>
              <FaSignOutAlt className="text-danger ms-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <></>
      )}
    </Navbar>
  );
};

export default Head;
