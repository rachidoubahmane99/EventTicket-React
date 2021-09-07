import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Colors from "../components/components-overview/Colors";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import Sliders from "../components/components-overview/Sliders";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";



const ComponentsOverview = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Create New Event"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <Colors />

      <Row>
        <Col lg="8" className="mb-4">
          

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">New Event</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
          
        </Col>
        <Col lg="4" className="mb-4">
          {/* Sliders & Progress Bars */}
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Costumize Ticket</h6>
            </CardHeader>
            <ListGroup flush>
              <Sliders />
            </ListGroup>
          </Card>

          

          <Card small>
            {/* Files & Dropdowns */}
            <CardHeader className="border-bottom">
              <h6 className="m-0">Event Logo</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Upload Your Event Logo
                </strong>
                <CustomFileUpload />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ComponentsOverview;
