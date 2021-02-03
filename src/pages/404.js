import React from "react"
import Layout from "../components/Layout";
import {Container, Jumbotron} from "react-bootstrap";

export default function Home() {
    return (
        <Layout lang="en">
            <Jumbotron fluid className="hero-img">
                <Container className="d-block text-center hero">
                    <h1>404 PAGE NOT FOUND</h1>
                </Container>
            </Jumbotron>
            <Container fluid>

            </Container>
        </Layout>
    );
}
