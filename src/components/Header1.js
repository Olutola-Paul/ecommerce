import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  Button,
} from "reactstrap";
import "../styles/Header.css";
import SignIn from "./SignIn";

const Header1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const signin = () => {
    <SignIn />;
  };

  return (
    <div className="space color1">
      <Navbar dark expand="md" style={{ width: "100%" }}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <InputGroup style={{ width: "40%" }}>
          <Input placeholder="username" />
          <Button color="success">Search</Button>
        </InputGroup>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/signin">Sign In</NavLink>
          <NavLink href="/register">Register</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header1;
