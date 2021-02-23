import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid className="footer">
            <Row className="alt-container justify-content-md-center p-4">
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Vision" target="_blank" rel="noreferrer">Vision</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Participate" target="_blank" rel="noreferrer">Participate</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites-roadmap" target="_blank" rel="noreferrer">Road map</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites---terms-of-use" target="_blank" rel="noreferrer">Terms of use</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites.io---ip-policy" target="_blank" rel="noreferrer">IP policy</a></li>
                    </ul>
                </Col>
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Data" target="_blank" rel="noreferrer">Data</a></li>
                        <li><a href="https://github.com/healthsites/healthsites" target="_blank" rel="noreferrer">Source code</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Data-lifecycle" target="_blank" rel="noreferrer">Data lifecycle</a></li>
                        <li><a href="https://healthsites.io/contact">Contact</a></li>
                    </ul>
                </Col>
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://gitter.im/healthsites/healthsites" target="_blank" rel="noreferrer">Chat space</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/API" target="_blank" rel="noreferrer">API</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Memorandum-of-Understanding-and-Governance" target="_blank" rel="noreferrer">MoU's and Governance</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/healthsites---privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
