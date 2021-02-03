import React from "react"
import Layout from "../components/Layout";
import {Container} from "react-bootstrap";

export default function Home() {
    return (
        <Layout lang="en">
            <Container fluid>
                <h1>404 Page not found</h1>
            </Container>
        </Layout>
    );
}
