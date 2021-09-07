import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
  FormTextarea
} from "shards-react";


const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor="feInputTitle">Title</label>
              <FormInput id="feInputTitle" placeholder="Event Title here" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputDescription">Description</label>
              
              <FormTextarea 
                id="feInputDescription"
                placeholder="This is your Event Description"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="feInputAddress">Address</label>
              <FormInput id="feInputAddress" placeholder="1234 Main St" />
            </FormGroup>


            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">Date</label>
                <FormInput id="feInputCity"
                type="date" />
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Capacity</label>
                <FormInput 
                id="feInputZip"
                type="number"
                min="1"
                 />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">Status</label>
                <FormSelect id="feInputState">
                  <option>public</option>
                  <option disabled >private</option>
                </FormSelect>
              </Col>
              
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button type="submit">Create New Event</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;
