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
                <div className="row">
                    <div className="col-md-8">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <div>
                                    <div
                                        className="blog-post-content"
                                        dangerouslySetInnerHTML={{__html: html}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                            <h4>Tags</h4>
                            <p className="text-success">{frontmatter.tags}</p>
                            <h4>Author</h4>
                            <p>{frontmatter.author}</p>

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
