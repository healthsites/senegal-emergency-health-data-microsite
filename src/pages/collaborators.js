import React from "react"
import Layout from "../components/Layout";
import {Container, Jumbotron} from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import {graphql} from "gatsby";

export default function Collaborators({ data, location }) {

    const collaborators = data.allMarkdownRemark.edges.map(({ node: collaborator }) => {
        if(collaborator.frontmatter.visible) {
            return (
                <div key={collaborator.id}>
                    <h1>{collaborator.frontmatter.name}</h1>
                    <p>{collaborator.frontmatter.homepage}</p>
                    <p>{collaborator.frontmatter.twitter}</p>
                </div>
            )
        }
    });

    return (
        <Layout lang="en">
            <Jumbo title={"Collaborators"} description={"The team responsible for the Senegal emergency health data project"}></Jumbo>
            <Container fluid>
                { collaborators }
            </Container>
        </Layout>
    );
}

export const query = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(collaborators)/.*\\\\.md$/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          name
          thumbnail
          homepage
          twitter
          visible
        }
      }
    }
  }
}

`
