/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardImg,
  CardTitle
} from "shards-react";
import GuestForm from "../components/guest/PrivateGuestForm";
import PageTitle from "../components/common/PageTitle";
import Ticket001 from "../components/tickets/Tickets/ticket001";
import axios from "axios";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const name = queryParams.get('name');
const type = queryParams.get('type');

const url = 'http://localhost:8080/events/'+id;

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        EVent: [],
        CustomTicket: [],
        data : false,
        fullname: '',
        qrcode :'',
        urlQrCode :''
       };
    
    
  }

  handleCallback = (childData) =>{
    console.log(childData);
    this.setState({
      data: true,
      fullname : childData.fullName,
      urlQrCode : childData.qrCode,
      qrcode : "http://api.qrserver.com/v1/create-qr-code/?data="+childData.qrCode+"&size=150x150"
      
    })
}




  componentDidMount() {
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET',
  };
  
  axios.get(url, { headers })
  .then(res => {
    this.setState({
      EVent: res.data,
      CustomTicket : res.data.customTicket
  });

   
  })
  }

  render() {
    
    const eventId = this.state.EVent.id;
    const eventTitle = this.state.EVent.title;
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Invite a Guest" subtitle="Events" className="text-sm-left" />
        </Row>

  

        {/* Second Row of Posts */}
        <ListGroup flush>
    <ListGroupItem className="p-3">
       
         
        <Row class="mb-2">
		<Col lg="8">

    <CardHeader className="border-bottom">
                        <h6 className="m-0">Event Information :</h6>
    </CardHeader>
      <CardImg style= {{ width:'200ox' ,height:'200px' }} src={this.state.CustomTicket.logo} />
      <CardBody>
        <CardTitle>{this.state.EVent.title}</CardTitle>
        <p>{this.state.EVent.description}</p>
        <strong style={{color:"blue"}}>{this.state.EVent.date} at {this.state.EVent.time}</strong>
      </CardBody>
      <CardFooter>Important Notice : </CardFooter>
   
    </Col>

       
        </Row>
        </ListGroupItem>
      
        </ListGroup>
        <ListGroup>
    <ListGroupItem className="p-3">
      <Row>
        <Col> 
      
      	<Col lg="8">

    <CardHeader className="border-bottom">
                        <h6 className="m-0">Guest Information :</h6>
    </CardHeader>
    <CardBody>
        <GuestForm eventId={eventId} eventTitle={eventTitle}  parentCallback = {this.handleCallback} />
        {this.state.data}
        </CardBody>
      </Col>
      </Col>
      </Row>
      </ListGroupItem>
      </ListGroup>
      </Container>
    );
  }
}

export default BlogPosts;
