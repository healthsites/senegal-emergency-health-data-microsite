import React from "react"
import Layout from "../components/Layout";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

export default function Home() {
  return (
      <Layout lang="en">
          <Jumbotron fluid className="hero-img">
            <Container className="d-block">
              <h1 className="display-4">Healthsites</h1>
              <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
              </p>
            </Container>
          </Jumbotron>
          <Container>

              <Row>
                  <Col sm>
                      <h3>About the Project</h3>
                      <p>“OpenStreetMap Senegal are mapping public hospitals in Senegal and updating the emergency health services available. This is part of a larger campaign from <a href="https://healthsites.io" target="_blank">healthsites.io</a> to define emergency health services across Africa.”</p>
                      <p>“We compare open data from OpenStreetMap hospitals with an open data set developed by the KEMRI-Wellcome research program in 2018 and currently hosted by WHO. With the support of Afrimapr, we establish R building blocks to allow personalized analysis using open source packages. We monitor progress in terms of entering additional health facility data into OSM through the Ohsome application developed by HeiGIT and afrihealthsites developed by afrimapr.”</p>
                  </Col>
                  <Col sm>
                      <img src="/img/about-img.png" alt="About the Project" className="img-fluid" />
                  </Col>
              </Row>
              <Row>
                  <Col sm>
img
                  </Col>
                  <Col sm>
                      <h3>What was the status at the beginning of the project?</h3>
                      <p>At the start of this project healthsites.io had collected information on 1,221 health
                          facilities in Senegal with most of them based in Dakar. Only partial information was available
                          for all facilities listed in <a href="https://healthsites.io" target="_blank">healthsites.io</a>. This meant that most entries did not list details
                          critical to support humanitarian responses.</p>
                      <p><a href="https://healthsites.io" target="_blank" className="btn btn-primary">Visit
                          healthsites.io</a></p>
                  </Col>
              </Row>

          </Container>
      </Layout>
  );
}
