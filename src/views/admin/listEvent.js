import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash,faBan } from '@fortawesome/free-solid-svg-icons';
import {ButtonGroup, Button,Card,Table} from 'react-bootstrap';
const axios = require('axios');



class ListEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/events')
            .then(response => response.data)
            .then((data) => {
                this.setState({events:data});
            });
            
    }

    getEvents() {
        axios.get('http://localhost:8080/events')
            .then(response => response.data)
            .then((data) => {
                this.setState({events:data});
            });
            
    }

    deleteEvent = (EventId) => {
        axios.delete("http://localhost:8080/events/"+EventId)
                .then(response => {
                    if(response.data != null){
                        alert("Voiture supprimée avec succès.");
                        this.setState({
                            events: this.state.events.filter(event => event.id !== EventId)
                        })
                }
             }
        )
    };

    cancelEvent = (EventId) => {
        axios.get("http://localhost:8080/CancelEvent/"+EventId)
                .then(response => {
                    axios.get('http://localhost:8080/events')
                        .then(response => response.data)
                        .then((data) => {
                            this.setState({events:data});
                        });
                    alert("Event has been canceled successfuly");
        })
    }

    


    render(){
        return (
            <Card > 
                <Card.Body>
                    <Table bordered hover striped variant="gray">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Event Manager</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.events.length===0 ?
                                <tr align="center">
                                    <td colSpan="6"> Event not available</td>
                                </tr>: this.state.events.map((event)=> (
                                    <tr key={event.id}>
                                        <td>{event.title}</td>
                                        <td>{event.description}</td>
                                        <td>{event.location}</td>
                                        <td>{event.date}</td>
                                        <td>{event.eventManager.fullName}</td>
                                        <td>{event.state}</td>
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

export default ListEvent;
