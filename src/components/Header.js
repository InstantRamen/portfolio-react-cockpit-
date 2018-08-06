import React from 'react';
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
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { slugEncode } from '../lib/helpers';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderItems(data) {
    return data.map(page => (
      <NavItem>
        <Link className="nav-link" to={`/${slugEncode(page.Title)}`}>
          {page.Title}
        </Link>
      </NavItem>
    ));
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/" className="navbar-brand">
              Derrick Cudd
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderItems(this.props.data)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
