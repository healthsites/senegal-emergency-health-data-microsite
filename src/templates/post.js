import React from "react"
import { graphql } from "gatsby";
import {Container} from "react-bootstrap";

import Layout from "../components/Layout";

export default function PostTemplate({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout lang="en">
            <Container fluid>
                <div className="blog-post-container">
                    <div className="blog-post">
                        <h1>{frontmatter.title}</h1>
                        <h2>{frontmatter.description}</h2>
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
