import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button } from "shards-react";
import axios from "axios";
import PageTitle from "../components/common/PageTitle";

const queryParams = new URLSearchParams(window.location.search);
const eventId = queryParams.get('event');


class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guests: []
     };
  }


  componentDidMount() {
      
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET',
  };
  
  axios.get("http://localhost:8080/events/"+eventId+"/guests", { headers })
  .then(res => { 
    this.setState({
     
      guests: res.data
  });

   
  })



  
}


  render() {
     const tableRows = this.state.guests.map((guest, index) =>
    
     guest.map((subitem, i) => 
      <tr key={i}>
        <td>{subitem.id}</td>
        <td>{subitem.fullName}</td>
        <td>{subitem.email}</td>
        <td>{subitem.cin}</td>
        <td>{subitem.qrCode} </td>
      </tr>
      )
      );

      
    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="My Events" subtitle="public & private " className="text-sm-left" />
    </Row>

 

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Event Guests</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    FullName
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Cin
                  </th>
                  <th scope="col" className="border-0">
                    Qr Code
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
  </Container>
    );
}
}

export default Errors;