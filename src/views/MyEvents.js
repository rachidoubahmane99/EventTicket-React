import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button } from "shards-react";
import axios from "axios";
import PageTitle from "../components/common/PageTitle";
class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [],
                    privateEvents: []
     };
  }


  componentDidMount() {
      
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET',
  };
  
  axios.get("http://localhost:8080/events/public/1", { headers })
  .then(res => { 
    this.setState({
       events: res.data
    });
   
  });

//fetch private Events
axios.get("http://localhost:8080/events/private/1", { headers })
.then(res => { 
  this.setState({
   
    privateEvents: res.data
});
 
})

  
}


  render() {

    
     const tableRows = this.state.events.map((event, index) =>
    
      event.map((subitem, i) => 
      <tr key={i}>
        <td>{subitem.id}</td>
        <td>{subitem.title}</td>
        <td>{subitem.date}</td>
        <td>{subitem.capacity}</td>
        <td>
        <a href={'/Ticket?id=' + subitem.id}><Button outline pill theme="success">
       Event Link
      </Button></a>
        <a href={'/guestList?event=' + subitem.id}><Button outline pill >
        View Guests
      </Button></a>
      <a href=""><Button outline pill theme="danger">
       Cancel Event
      </Button></a>
      </td>
      </tr>
      )
      );
      const PrivateEVentsData = this.state.privateEvents.map((event, index) =>
    
      event.map((subitem, i) => 
      
      <tr key={i}>
        <td>{subitem.id}</td>
        <td>{subitem.title}</td>
        <td>{subitem.date}</td>
        <td>{subitem.capacity}</td>
        <td>
       <a href={'/guset/pv?id=' + subitem.id}><Button outline pill theme="success">
       Invite Guest
      </Button></a>
           <a href={'/guestList?event=' + subitem.id}><Button outline pill>
        View Guests
      </Button></a>
      <a href=""><Button outline pill theme="danger">
       Cancel Event
      </Button></a>
      </td>
      </tr>
      )
      );
      
    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="My Events" subtitle="public & private " className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Public Events</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Event Title
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Capacity
                  </th>
                  <th scope="col" className="border-0" style=  {{width: '350px'}}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              {tableRows}                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Private Events</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Event Title
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Capacity
                  </th>
                  <th scope="col" className="border-0" style=  {{width: '350px'}}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
             
                {PrivateEVentsData}
                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
    );
}
}

export default Tables;