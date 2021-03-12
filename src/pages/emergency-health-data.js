import React from "react"
import Layout from "../components/Layout";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {graphql} from "gatsby";
import Jumbo from "../components/Jumbo";

export default function EmergencyHealthData({ data }) {

    const { title, description } = data.site.siteMetadata;

  return (
      <Layout lang="en">

          <Jumbo title={title} description={description}></Jumbo>

          <Container>

              <Row className="py-5">
                  <Col sm={7}>
                      <h3>About the Project</h3>
                      <p>“OpenStreetMap Senegal are mapping public hospitals in Senegal and updating the emergency health services available. This is part of a larger campaign from <a href="https://healthsites.io" target="_blank" rel="noreferrer">healthsites.io</a> to define emergency health services across Africa.”</p>
                      <p>“We compare open data from OpenStreetMap hospitals with an open data set developed by the KEMRI-Wellcome research program in 2018 and currently hosted by WHO. With the support of Afrimapr, we establish R building blocks to allow personalized analysis using open source packages. We monitor progress in terms of entering additional health facility data into OSM through the Ohsome application developed by HeiGIT and afrihealthsites developed by afrimapr.”</p>
                  </Col>
                  <Col sm={5}>
                      <img src="/img/about-img.png" alt="About the Project" className="img-fluid px-md-3" />
                  </Col>
              </Row>
              <Row className="py-5">
                  <Col sm={5}>
                      <img src="/img/hs-hero.png" alt="About the Healthsites.io" className="img-fluid px-md-3" />
                  </Col>
                  <Col sm={7}>
                      <h3>What was the status at the beginning of the project?</h3>
                      <p>At the start of this project healthsites.io had collected information on 1,221 health
                          facilities in Senegal with most of them based in Dakar. Only partial information was available
                          for all facilities listed in <a href="https://healthsites.io" target="_blank" rel="noreferrer">healthsites.io</a>. This meant that most entries did not list details
                          critical to support humanitarian responses.</p>
                      <p><a href="https://healthsites.io" target="_blank" rel="noreferrer" className="btn btn-primary">Visit
                          healthsites.io</a></p>
                  </Col>
              </Row>

              <Row className="py-5">
                  <Col className="text-center">
                      <h3>Project overview</h3>
                  </Col>
              </Row>

              <Row className="py-5">
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
              </Row>

              <Row className="py-5">
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
                  <Col>
                      <h4>Emergency health data</h4>
                      <p>Senegal’s OpenStreetMap cartographers called hospitals to confirm available emergency services</p>
                  </Col>
              </Row>

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
