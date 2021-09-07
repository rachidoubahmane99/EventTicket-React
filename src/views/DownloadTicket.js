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
  CardHeader
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
const idv = queryParams.get('idv');
const type = queryParams.get('type');

const url = 'http://localhost:8080/guests/'+id;

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        Guest: [],
        EVENT : [],
        CostumTicket : [],
        redirect: null
       };
    
    
  }






  componentDidMount() {
    const headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET',
  };
  
 
  
  axios.get(url, { headers })
  .then(res => {
    if(res.data==null){
      this.setState({
        redirect: "/errors"
    });
    }else{
    this.setState({
      Guest: res.data,
      EVENT : res.data.event,
      CostumTicket : res.data.event.customTicket
  });
  console.log(this.state.CostumTicket.logo);
}
   
  })
  }
  render() {
    if (this.state.redirect!=null) {
      return <Redirect to={this.state.redirect} />
    }
    const logoimage = this.state.CostumTicket.logo;
    const qrcodeurl = "http://api.qrserver.com/v1/create-qr-code/?data="+this.state.Guest.qrCode+"&size=150x150"
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Get Your Ticket" subtitle="Tickets" className="text-sm-left" />
        </Row>

        <ListGroup>
    <ListGroupItem className="p-3">
    <CardHeader className="border-bottom">
                        <h6 className="m-0">Here is Your Ticket :</h6>
    </CardHeader>
      <Row>
        <Col> 
      
      
      <br></br>
        <Pdf targetRef={ref} filename="code-example.pdf">
     {({ toPdf }) => <Button onClick={toPdf}>Download Your Ticket</Button>}
      </Pdf>
      <div ref={ref}>
      <br></br><br></br>
        
         <Ticket001 fullname={this.state.Guest.fullName} qrcode={qrcodeurl} qrcodeKey ={this.state.Guest.qrCode} eventtitle={this.state.EVENT.title}
         eventdescription={this.state.EVENT.description}
         eventlocation={this.state.EVENT.location}
         eventdate={this.state.EVENT.date}
         eventtime={this.state.EVENT.time}
         titlesize = {this.state.CostumTicket.titleSize}
         descriptionSize = {this.state.CostumTicket.descriptionSize}
         locationSize = {this.state.CostumTicket.locationSize}
         logo={logoimage}
         />
         </div>
      </Col>
    
      </Row>
      </ListGroupItem>
      </ListGroup>
     
      </Container>
    );
  }
}

export default BlogPosts;
