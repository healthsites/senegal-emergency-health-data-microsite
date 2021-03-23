import React from "react"
import Layout from "../components/Layout";
import {Container} from "react-bootstrap";
import {graphql} from "gatsby";
import Jumbo from "../components/Jumbo";

export default function Data({ data }) {

    const { title, description } = data.site.siteMetadata;

  return (
      <Layout lang="en">

          <Jumbo title={title} description={description}></Jumbo>

          <Container>

<iframe src="https://andysouth.shinyapps.io/senegal_healthsites_collection" width="100%" height="800px"></iframe>

          </Container>
      </Layout>
  );
}

export const query = graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
