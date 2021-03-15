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

    const posts = data.allMarkdownRemark.edges.map(({node: post}) => {

        let pathToPost = path.basename(post.fileAbsolutePath, '.md');

        let thumbnail = ''

        if (post.frontmatter.thumbnail) {
            thumbnail = <img
                className="card-img-right flex-auto d-none d-md-block img-thumbnail"
                src={post.frontmatter.thumbnail}
            ></img>
        }

        return (
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start" key={post.id}>
                        <div className="d-flex justify-content-between w-100">
                            <strong className="text-success">{post.frontmatter.tags}</strong>
                            <p>{post.frontmatter.date}</p>
                        </div>
                        <h3>{post.frontmatter.title}</h3>
                        <p>{post.excerpt}</p>
                        {thumbnail}
                        <div className="d-flex justify-content-between w-100 pt-3">
                            <div><Link to={pathToPost}>Read more </Link></div>
                            <div>{post.frontmatter.author}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Layout location={location} title={title} lang="en">

            <Jumbo title={title} description={description}></Jumbo>

            <Container>
                <div className="row mb-2">
                    {posts}
                </div>
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
          date (formatString: "DD/MM/YYYY")
          language
          tags
          thumbnail
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
