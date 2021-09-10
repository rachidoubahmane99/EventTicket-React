import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faBan,faCheck } from '@fortawesome/free-solid-svg-icons';
import {ButtonGroup, Button,Card,Table} from 'react-bootstrap';
const axios = require('axios');



class AdminList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { admins: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/admins')
            .then(response => response.data)
            .then((data) => {
                this.setState({admins:data});
            });
            
    }

    cancelAdmin = (AdminId) => {
        axios.get("http://localhost:8080/CancelAdmin/"+AdminId)
                .then(response => {
                    axios.get('http://localhost:8080/admins')
                        .then(response => response.data)
                        .then((data) => {
                            this.setState({admins:data});
                        });
                    alert("Event has been canceled successfuly");
        })
    }

    ActiveAdmin = (AdminId) => {
        axios.get("http://localhost:8080/ActiveAdmin/"+AdminId)
                .then(response => {
                    axios.get('http://localhost:8080/admins')
                        .then(response => response.data)
                        .then((data) => {
                            this.setState({admins:data});
                        });
                    alert("Event has been activated successfuly");
        })
    }




    render(){
        return (
            <Card > 
                <Card.Body>
                    <Table bordered hover striped variant="gray">
                        <thead>
                            <tr>
                                <th>FullName</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.admins.length===0 ?
                                <tr align="center">
                                    <td colSpan="6"> No Admin available</td>
                                </tr>: this.state.admins.map((admin)=> (
                                    <tr key={admin.id}>
                                        <td>{admin.fullName}</td>
                                        <td>{admin.login}</td>
                                        <td>{admin.password}</td>
                                        {admin.active === 1 ?
                                            <td>Active</td>:<td>Blocked</td>
                                        }
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary" onClick={this.cancelAdmin.bind(this,admin.id)}>
                                                    <FontAwesomeIcon icon={faBan}/>
                                                </Button>{" "}
                                                <Button size="sm" variant="outline-primary" onClick={this.ActiveAdmin.bind(this,admin.id)}>
                                                    <FontAwesomeIcon icon={faCheck}/>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default AdminList;
