import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


export default function Jumbo({ title, description }) {
    return (
        <Jumbotron fluid className="hero-img">
            <Container className="d-block text-center hero">
                <h1 style={{ textTransform: "uppercase" }}>{title}</h1>
                <p>{description}</p>
            </Container>
        </Jumbotron>
    );
}
