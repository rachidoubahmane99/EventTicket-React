import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faBan,faCheck } from '@fortawesome/free-solid-svg-icons';
import {ButtonGroup, Button,Card,Table} from 'react-bootstrap';
const axios = require('axios');



class EventManagerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { managers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/eventManager')
            .then(response => response.data)
            .then((data) => {
                this.setState({managers:data});
            });
            
    }

    cancelManager = (ManagerId) => {
        axios.get("http://localhost:8080/CancelManager/"+ManagerId)
                .then(response => {
                    axios.get('http://localhost:8080/eventManager')
                        .then(response => response.data)
                        .then((data) => {
                            this.setState({managers:data});
                        });
                    alert("Event has been canceled successfuly");
        })
    }

    ActiveManager = (ManagerId) => {
        axios.get("http://localhost:8080/ActiveManager/"+ManagerId)
                .then(response => {
                    axios.get('http://localhost:8080/eventManager')
                        .then(response => response.data)
                        .then((data) => {
                            this.setState({managers:data});
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
                                <th>email</th>
                                <th>Bio</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.managers.length===0 ?
                                <tr align="center">
                                    <td colSpan="6"> Event manager not available</td>
                                </tr>: this.state.managers.map((manager)=> (
                                    <tr key={manager.id}>
                                        <td>{manager.fullName}</td>
                                        <td>{manager.email}</td>
                                        <td>{manager.bio}</td>
                                        {manager.active === 1 ?
                                            <td>Active</td>:<td>Blocked</td>
                                        }
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary" onClick={this.cancelManager.bind(this,manager.id)}>
                                                    <FontAwesomeIcon icon={faBan}/>
                                                </Button>{' '}{' '}
                                                <Button size="sm" variant="outline-primary" onClick={this.ActiveManager.bind(this,manager.id)}>
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

export default EventManagerList;
