import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Navbar1 = () => {
  return (
    <div>
      <Navbar style={{backgroundColor:"#000",border:"2px solid"}} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" style={{color:"white",fontWeight:"bold"}}>MyTodoTask</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}} />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto p-4 flex-grow-1 justify-content-around">
              <NavLink style={{color:"white" ,textDecorationLine:"none"}} to="/">Todos</NavLink>
              <NavLink  style={{color:"white",textDecorationLine:"none"}} to="/singleTodo">OneTodoTask</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbar1;
