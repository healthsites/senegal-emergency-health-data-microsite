import React from "react"
import {graphql, Link} from "gatsby";
import * as PropTypes from "prop-types";

import Layout from '../components/Layout';
import {Container, Jumbotron} from "react-bootstrap";
import * as path from "path";
import Jumbo from "../components/Jumbo";

Layout.propTypes = {children: PropTypes.node};

export default function Blog({ data, location }) {

    const { title, description } = data.site.siteMetadata;

    const posts = data.allMarkdownRemark.edges.map(({ node: post }) => {

        let pathToPost = path.basename(post.fileAbsolutePath, '.md');

        return (
            <div key={post.id}>
                <h1>{ post.frontmatter.title }</h1>
                <p>{ post.excerpt }</p>
                <Link to={pathToPost}>Read more</Link>
            </div>
        );
    });

    return (
        <Layout location={location} title={title} lang="en">

            <Jumbo title={title} description={description}></Jumbo>

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
        fileAbsolutePath
      }
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
