import React from "react"
import {Container, Jumbotron} from "react-bootstrap";
import Layout from "../components/Layout";

export default function Contact() {

    return (
        <Layout lang="en">
            <Jumbotron fluid className="hero-img">
                <Container className="d-block text-center hero">
                    <h1>DROP US A NOTE</h1>
                    <p>Get in touch to learn more about the project or request a similar project.</p>
                </Container>
            </Jumbotron>
            <Container fluid>
                tbc
            </Container>
        </Layout>
    );
}
