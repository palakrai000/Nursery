import React from 'react';
import {  faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  
    <div >
      <Navbar  className="nav-dark" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Offers/">Offers</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Stores
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Plants
                </DropdownItem>
                <DropdownItem>
                  Seeds
                </DropdownItem>
                <DropdownItem>
                 Gifts
                </DropdownItem>
                <DropdownItem>
                  Accessories
                </DropdownItem>
                <DropdownItem>
                  Soil & Fertilizers
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        
          <NavLink href="src\Authentication\Login.js"><FontAwesomeIcon icon={faUser} size="2x" color="White" /> </NavLink>
          <NavLink href="src\Authentication\Register.js"><FontAwesomeIcon icon={faShoppingCart} size="2x" color="White" /> </NavLink>
          
        
      </Navbar>
    </div>
  );

export default NavBar;