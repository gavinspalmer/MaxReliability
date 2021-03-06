import React, { Component } from 'react';
import LoginModal from './LoginComponent';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };     
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            MaxReliability <img src='assets/images/happy.jpg' height="40" width="40" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            {/*<Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'>
                                        <span>Review</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'>
                                        <span>Edit</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'>
                                        <span>Export</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>*/}
                            <Nav className="ml-auto" navbar>
                                <Button type="save" name="save" style={{marginRight:"5px"}}>Save</Button>
                                <Button type="export" name="export" style={{marginRight:"5px"}}>Export PDF</Button>
                                <Button type="import" name="import" style={{marginRight:"5px"}}>Import</Button>
                                <NavItem>
                                    <LoginModal />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;