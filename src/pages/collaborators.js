import React from "react"
import Layout from "../components/Layout";
import {Container, Jumbotron} from "react-bootstrap";

export default function Collaborators() {
    return (
        <Layout lang="en">
            <Jumbotron fluid className="hero-img">
                <Container className="d-block text-center hero">
                    <h1>COLLABORATORS</h1>
                    <p>The team responsible for the Senegal emergency health data project.</p>
                </Container>
            </Jumbotron>
            <Container fluid>
                tbc
            </Container>
        </Layout>
    );
}
