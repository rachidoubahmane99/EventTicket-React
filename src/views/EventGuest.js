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
import { Redirect } from "react-router-dom";
import GuestForm from "../components/guest/GuestForm";
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
        urlQrCode :'',
        redirect: null
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
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Tickets" subtitle="Guests" className="text-sm-left" />
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
        <GuestForm eventId={eventId}  parentCallback = {this.handleCallback} />
        {this.state.data}
        </CardBody>
      </Col>
      </Col>
      </Row>
      </ListGroupItem>
      </ListGroup>
      <ListGroup>
      <ListGroupItem className="p-3">
      <Container fluid className="main-content-container px-4">
<Row class="mb-2">
 <Col lg="8">
 <CardHeader className="border-bottom">
                     <h6 className="m-0">Ticket Preview</h6>
 </CardHeader>
     
    
      {   this.state.data ?
     <Pdf targetRef={ref} filename="code-example.pdf">
     {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
   </Pdf>
          :
           null
        }
        {   this.state.data ?
         <div ref={ref}>
         <br></br><br></br>
        
         <Ticket001 fullname={this.state.fullname} qrcode={this.state.qrcode} qrcodeKey ={this.state.urlQrCode}
         eventtitle={this.state.EVent.title}
         eventdescription={this.state.EVent.description}
         eventlocation={this.state.EVent.location}
         eventdate={this.state.EVent.date}
         eventtime={this.state.EVent.time}
         titlesize = {this.state.CustomTicket.titleSize}
         descriptionSize = {this.state.CustomTicket.descriptionSize}
         locationSize = {this.state.CustomTicket.locationSize}
         logo={this.state.CustomTicket.logo}/>
       </div>
         :
         null
      } 
       </Col>
      </Row>
      </Container>
     
      </ListGroupItem>
      </ListGroup>
      </Container>
    );
  }
}

export default BlogPosts;
