import React from "react"
import {Container, Jumbotron} from "react-bootstrap";
import Layout from "../components/Layout";
import Jumbo from "../components/Jumbo";

export default function Contact() {

    return (
        <Layout lang="en">

            <Jumbo title={"Drop us a note"} description={"Get in touch to learn more about the project or request a similar project."}></Jumbo>

            <Container fluid>
                Hello

            </Container>
        </Layout>
    );
}
