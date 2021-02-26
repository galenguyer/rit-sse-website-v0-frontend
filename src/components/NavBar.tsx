import '../styles/NavBar.scss';
import {
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/sse-logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleNavbarIsOpen = () => setNavbarIsOpen(!navbarIsOpen);
  const toggleDropdownIsOpen = () => setDropdownIsOpen(!dropdownIsOpen);

  return (
    <Navbar expand="sm">
      <NavbarBrand tag={Link} to="/">
        <img src={Logo} alt="SSE Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbarIsOpen} />
      <Collapse isOpen={navbarIsOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/events">
              Events
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/go">
              Go Links
            </NavLink>
          </NavItem>
          <Dropdown
            nav
            left
            isOpen={dropdownIsOpen}
            toggle={toggleDropdownIsOpen}
          >
            <DropdownToggle nav caret>
              About
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink tag={Link} to="/about">
                  About the SSE
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink tag={Link} to="/officers">
                  Officers
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to="/governing-docs/constitution">
                  SSE Constitution
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  tag={Link}
                  to="/governing-docs/primary-officers-policy"
                >
                  SSE Primary Officers' Policy
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
