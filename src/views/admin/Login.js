import React, { useState,Component } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

class login extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email: "",
        password: "",
    };

    credentialChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    resetLoginForm = () => {
        this.setState(()=>this.initialState);
    }

    render() {
        const {email,password} = this.state;
        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                   
                    <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        Login
                    </Card.Header>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group>
                                <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    required
                                    autoComplete="off"
                                    type="text"
                                    name="email"
                                    value={email}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Email Address"
                                    onChange={this.credentialChange}
                                />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group>
                            <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                required
                                autoComplete="off"
                                type="password"
                                name="password"
                                value={password}
                                className={"bg-dark text-white"}
                                placeholder="Enter Password"
                                onChange={this.credentialChange}
                            />
                            </InputGroup>
                        </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: "right" }}>
                    <Button
                        size="sm"
                        type="button"
                        variant="success"
                        disabled={this.state.email.length === 0 || this.state.password.length === 0}
                        >
                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </Button>{" "}
                        <Button
                        size="sm"
                        type="button"
                        variant="info"
                        onClick={this.resetLoginForm}
                        disabled={this.state.email.length === 0 && this.state.password.length === 0}
                        >
                        <FontAwesomeIcon icon={faUndo} /> Reset
                    </Button>
                    </Card.Footer>
                    </Card>
                </Col>
    </Row>
        )
    }
}

export default login;
