import React from "react"
import { graphql } from "gatsby";
import * as PropTypes from "prop-types";

import Layout from '../components/Layout';
import {Container} from "react-bootstrap";

Layout.propTypes = {children: PropTypes.node};

export default function Blog({ data, location }) {

    const { title } = data.site.siteMetadata;

    const posts = data.allMarkdownRemark.edges.map(({ node: post }) => {
        return (
            <div key={post.id}>
                <h1>{ post.frontmatter.title }</h1>
                <p>{ post.excerpt }</p>
            </div>
        )
    });

    return (
        <Layout location={location} title={title} lang="en">
            <Container fluid>
                { posts }
            </Container>
        </Layout>
    );
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {language: {eq: "en"}}}) {
    edges {
      node {
        id
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
  site {
    siteMetadata {
      title
    }
  }
}
`
