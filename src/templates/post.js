import React from "react"
import { graphql } from "gatsby";
import {Container, Jumbotron} from "react-bootstrap";

import Layout from "../components/Layout";

export default function PostTemplate({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout lang="en">

            <Jumbotron fluid className="hero-img">
                <Container className="d-block text-center hero">
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.description}</p>
                </Container>
            </Jumbotron>

            <Container>
                <div className="blog-post-container">
                    <div className="blog-post">
                        <p>{frontmatter.author}</p>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export const query = graphql`
query ($pathRegex: String!) {
    markdownRemark(fileAbsolutePath: {regex: $pathRegex}) {
        html
        excerpt
        frontmatter {
            description
            title
            author
            categories
            date
            language
            tags
        }
    }
}
`
