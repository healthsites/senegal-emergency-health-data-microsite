import React from "react";

import { Navbar } from "react-bootstrap";

import Share from '../../../static/assets/share.svg';

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand>
                healthsites.io <Share width="1.1em" height="1.1em" />
            </Navbar.Brand>
        </Navbar>
    );
}
