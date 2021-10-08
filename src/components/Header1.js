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

const Header1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="space">
      <Navbar light expand="md" style={{ width: "100%" }}>
        <NavbarBrand href="/home" className="mx-auto">
          <img src="/assets/images/Logo2.png" alt="Buy online" />
        </NavbarBrand>
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
          <NavLink href="/signin">
            <button style={{ color: "white" }} className="btn btn-warning">
              Sign In
            </button>
          </NavLink>
          <NavLink href="/register">
            <button style={{ color: "white" }} className="btn btn-success">
              Register
            </button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header1;
