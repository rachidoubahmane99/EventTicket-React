import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faUndo,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {Card,Form,Col,Button, Container} from 'react-bootstrap'; 

import PageTitle from "../../components/common/PageTitle";
const axios = require('axios');
class addAdmin extends React.Component {

      constructor(props) { 
        super(props);
        this.state=this.initialState;
        this.adminChange = this.adminChange.bind(this);
        this.submitAdmin = this.submitAdmin.bind(this);
    }

    initialState = {
      fullname:"", login:"",password:""
    }

    resetAdmin = () => {
      this.setState(()=> this.initialState
    );
    }

    submitAdmin = event => { 
    event.preventDefault(); 
    const admin = {
        fullName:this.state.fullname,
        login:this.state.login,
        password:this.state.password
    };
    axios.post('http://localhost:8080/admins',admin)
        .then(response => {
            if(response.data != null){
                this.setState(this.initialState);
                alert("Admin has been successfuly added");
            }
    });
    }

    adminChange(event) { 
      this.setState({
          [event.target.name]:event.target.value
      });
  }



  render(){
    return (
      <Container>
      <Card> 
      <Card.Header><FontAwesomeIcon icon={faPlusSquare}/>Add Admin</Card.Header>
                <Card.Body> 
                <Form onReset={this.resetAdmin} onSubmit={this.submitAdmin} id="AdminFormId">
                    <Card.Body>
                        <Form.Row> 
                            <Form.Group as={Col} controlId="formGridfullname">
                                <Form.Label>FullName</Form.Label> 
                                <Form.Control required name ="fullname" type="text"  placeholder= "Enter fullname" value={this.state.fullname} autoComplete="off" onChange={this.adminChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLogin">
                                <Form.Label>Email</Form.Label> 
                                <Form.Control required autoComplete="off" name ="login" type="text"  placeholder= "Enter Login" value={this.state.login} onChange={this.adminChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridImmatricule">
                                <Form.Label>Password</Form.Label> 
                                <Form.Control required autoComplete="off" name ="password" type="password"  placeholder= "Enter Password" value={this.state.password} onChange={this.adminChange}/>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type = "submit"><FontAwesomeIcon icon={faSave}/> Submit</Button>
                            <Button size="sm" variant="info" type = "reset"><FontAwesomeIcon icon={faUndo}/> Reset</Button>
                        </Card.Footer>
                </Form> 
                </Card.Body> 
            </Card>
            </Container>
    )
  }}

export default addAdmin;
