import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid className="footer">
            <Row className="alt-container justify-content-md-center p-4">
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Vision" target="_blank">Vision</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Participate" target="_blank">Participate</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites-roadmap" target="_blank">Road map</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites---terms-of-use" target="_blank">Terms of use</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Healthsites.io---ip-policy" target="_blank">IP policy</a></li>
                    </ul>
                </Col>
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Data" target="_blank">Data</a></li>
                        <li><a href="https://github.com/healthsites/healthsites" target="_blank">Source code</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Data-lifecycle" target="_blank">Data lifecycle</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </Col>
                <Col md={{ span: 2 }}>
                    <ul className="mb-3 mb-sm-0">
                        <li><a href="https://gitter.im/healthsites/healthsites" target="_blank">Chat space</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/API" target="_blank">API</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/" target="_blank">GitHub</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/Memorandum-of-Understanding-and-Governance" target="_blank">MoU's and Governance</a></li>
                        <li><a href="https://github.com/healthsites/healthsites/wiki/healthsites---privacy-policy" target="_blank">Privacy Policy</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
