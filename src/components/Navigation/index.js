import React from "react";

import {Nav, Navbar} from "react-bootstrap";

import Share from '../../../static/assets/share.svg';
import {Link} from "gatsby";

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>
                healthsites.io <Share width="1.1em" height="1.1em" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav as="ul">
                    <Nav as="li"><Link to="/" className="nav-link" activeClassName="active">Home</Link></Nav>
                    <Nav as="li"><Link to="/collaborators" className="nav-link" activeClassName="active">Collaborators</Link></Nav>
                    <Nav as="li"><Link to="/blog" className="nav-link" activeClassName="active">Blog</Link></Nav>
                    <Nav as="li"><Link to="/contact" className="nav-link" activeClassName="active">Contact</Link></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
