import React from "react"
import Layout from "../components/Layout";
import {Card, CardColumns, Container, Image} from "react-bootstrap";
import Jumbo from "../components/Jumbo";
import {graphql} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import Link from "gatsby-link";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import usePopperMarginModifiers from "react-bootstrap/usePopperMarginModifiers";

export default function Collaborators({ data, location }) {

    const collaborators = data.allMarkdownRemark.edges.map(({ node: collaborator }) => {
        if(collaborator.frontmatter.visible) {
            //edit

            let linkedin = ''

            if (collaborator.frontmatter.linkedin) {
                linkedin = <Link to={collaborator.frontmatter.linkedin} target="_blank" className="p-3">
                    <FontAwesomeIcon icon={faLinkedin} size = '3x'/>
                </Link>
            }

            let twitter = ''

            if (collaborator.frontmatter.twitter) {
                twitter = <Link to={collaborator.frontmatter.twitter} target="_blank" className="p-3" fontSize="15">
                    <FontAwesomeIcon icon={faTwitterSquare} size = '3x'/>
                </Link>
            }

            let homepage = ''

            if (collaborator.frontmatter.homepage) {
                homepage = <Link to={collaborator.frontmatter.homepage} target="_blank" className="p-3">
                    <FontAwesomeIcon icon={faHome} size='3x'/>
                </Link>
            }



            return (
                // <div key={collaborator.id}>
                //     <h1>{collaborator.frontmatter.name}</h1>
                //     <p>{collaborator.frontmatter.homepage}</p>
                //     <p>{collaborator.frontmatter.twitter}</p>padding: 1rem 1.5rem;
                // </div>

                <Card>
                    <Card.Img src={collaborator.frontmatter.thumbnail} thumbnail/>
                    <Card.Body>
                        <Card.Title>{collaborator.frontmatter.name} </Card.Title>
                        <Card.Subtitle>
                            {collaborator.frontmatter.title}
                        </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        {homepage}
                        {twitter}
                        {linkedin}
                    </Card.Footer>
                </Card>
            );
            //finish
        }
    });

    return (
        <Layout lang="en">
            <Jumbo title={"Collaborators"}
                   description={"The team responsible for the Senegal emergency health data project"}></Jumbo>
            <Container>
                <CardColumns>
                    {collaborators}
                </CardColumns>
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
          linkedin
        }
      }
    }
  }
}

`
