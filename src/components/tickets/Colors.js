import React from "react";
import { Row, Col, FormRadio } from "shards-react";

const Colors = () => (
  <Row className="mb-2">
    <Col lg="12">
      <span style={{ fontSize: "16px" }} className="d-block mb-2 text-muted">
        <strong>Ticket Templates</strong>
      </span>
    </Col>

    <Col className="mb-4">
  
     
      <div
        className="bg-primary text-white text-center rounded p-3 "
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
          Free Template
        </div>
        <FormRadio defaultChecked  >
        Choose
      </FormRadio>
    </Col>
    <Col className="mb-4">
   
     
      <div
        className="bg-secondary text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
        Paid 
      </div>
      <FormRadio disabled >Checked</FormRadio>
    </Col>
    <Col className="mb-4">
    
      <div
        className="bg-success text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
        Paid
      </div>
      <FormRadio disabled >Checked</FormRadio>
    </Col>

  </Row>
);

export default Colors;
