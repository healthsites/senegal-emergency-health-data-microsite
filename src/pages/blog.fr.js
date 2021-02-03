import React from "react"
import { graphql } from "gatsby";
import {Container, Jumbotron} from "react-bootstrap";
import Layout from "../components/Layout";

export default function Blog({ data }) {

    const posts = data.allMarkdownRemark.edges.map(({ node: post }) => {
        return (
            <div>
                <h1>{ post.frontmatter.title }</h1>
                <p>{ post.excerpt }</p>
            </div>
        )
    });

    return (
        <Layout lang="fr">
            <Jumbotron fluid className="hero-img">
                <Container className="d-block text-center hero">
                    <h1>BLOG</h1>
                    <p>Learn more about our mappers, data, challenges, and lessons learned/</p>
                </Container>
            </Jumbotron>
            <Container fluid>
                { posts }
            </Container>
        </Layout>
    );
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {language: {eq: "fr"}}}) {
    edges {
      node {
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
  }
}
`
