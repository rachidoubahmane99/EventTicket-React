import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  Button
} from "shards-react";
import axios from "axios";
import PageTitle from "../common/PageTitle";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactDOMServer from 'react-dom/server';
import { render } from "react-dom";
import createClass from 'create-react-class';



function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
const GuestQrKey = makeid(12);




const url = 'http://api.qrserver.com/v1/create-qr-code/?data='+GuestQrKey+'&size=100x100';
class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = { submited : true}
    this.state = this.initialState;
   
  }
 

 



  initialState = {
    fullName: '',
    email : '',
    phone : '',
    cin : '',
    qrcode : ''

    };



    submitEvent = event=>{
      event.preventDefault()
      
      const Event = {
        fullName: this.state.fullname,
        email: this.state.email,
        phone: this.state.phone,
        cin: this.state.cin,
        qrCode: GuestQrKey,
        event: {
          "id" : this.props.eventId
        }
      }
      Swal.fire({
        title: "You want to save ?",
        html:
        ' <p> <b> Full Name  :</b>  ' + Event.fullName + 
        '<p> <b> Email  :  </b>' + Event.email+
        '<p> <b>Phone Number :  </b>' + Event.phone+
        '<p> <b> Cin  : </b>  ' + Event.cin
    ,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Generating Your Ticket...',
            html: 'Please wait We are Getting Event Ticket Ready For You...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
            }
          });
          axios({ 
            method: 'post', 
            url: "http://localhost:8080/events/MyTicket", 
            data: Event, 
            headers: {
              "Content-Type": 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
            })
            .then(res => {
              if (res.status === 200) { 
              console.log(res.data);
              Swal.close();
              this.props.parentCallback(Event);
              
              Swal.fire({
                title: "Your Ticket Is Ready!",
                text: "Downloawd It now!!",
                icon: "success",
                

              });
            

        } 
      }).catch(err => { 
        Swal.fire('Data Not Saved', '', 'info')
        
    });
  
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      });
    }

    handleFullName = event => {
      this.setState({ fullname: event.target.value });
      
    }
    
    handleEmail = event => {
      this.setState({ email: event.target.value });
      
    }
    
    handleCin = event => {
      this.setState({ cin: event.target.value });
      
    }
    handlePhone = event => {
      this.setState({ phone: event.target.value });
      
    }

  render() {
    return (
  <Col  md="6">
    
    <Form  onSubmit = { this.submitEvent }>
      <Row form>
        <Col md="8" className="form-group">
          <FormInput
            placeholder="Full Name"
            required
            value={this.state.fullname}
            onChange={this.handleFullName}          />
        </Col>
        
      </Row>
      <FormGroup>
        <FormInput placeholder="Email"
         required
          Type="Email"
          value={this.state.email}
          onChange={this.handleEmail}
          />
        <FormFeedback>Email Must be a valid Email.</FormFeedback>
      </FormGroup>
      <FormGroup>
      <FormInput placeholder="Phone Number"
         required
          Type="Text"
          value={this.state.phone}
          onChange={this.handlePhone}
          />
      </FormGroup>
      <FormGroup>
      <FormInput placeholder="Cin"
         required
          Type="Text"
          value={this.state.cin}
          onChange={this.handleCin}
          />
      </FormGroup>
      <Button type="submit" >Get Your Ticket Now</Button>
    </Form>
  
  </Col>
 );
}
}

export default GuestForm;
