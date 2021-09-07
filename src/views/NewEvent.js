import React from "react";
import { Container, Row, Col,
    ListGroup,
  ListGroupItem,
  Form,
  FormGroup

} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EventHome from "../components/guest/EventHome";
import GuestForm from "../components/guest/GuestForm";


const GenerateYourTicket = () => (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Get Your Event Ticket" subtitle="Events" className="text-sm-left" />
      </Row>
      <ListGroup flush>
    <ListGroupItem className="p-3">
    
      <Row >
          <Col>
      <EventHome/>
      </Col>
      </Row>
      
     </ListGroupItem>
     </ListGroup>
     
      <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col> 
      
      <Col lg="12">
        <GuestForm/>
      </Col>
      </Col>
      </Row>
      </ListGroupItem>
      </ListGroup>
      </Container>
      );

      export default GenerateYourTicket;