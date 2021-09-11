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
    this.state = this.initialState;
   
  }
 

 



  initialState = {
    fullName: '',
    email : '',
    phone : '',
    cin : '',
    qrcode : '',
    subject: 'Event Invitation',
    content : "",
    guestID:''
    };



    submitEvent = event=>{
      event.preventDefault()
      
      const Event = {
        fullName: this.state.fullName,
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
                this.state.guestID= res.data.id;
              this.state.content= "<table cellspacing='0' border='0' cellpadding='0' width='100%' bgcolor='#f2f3f8' style='@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;'>"+
              "<tr>"+
                  "<td>"+
                      "<table style='background-color: #f2f3f8; max-width:670px;  margin:0 auto;' width='100%' border='0'align='center' cellpadding='0' cellspacing='0'>"+
                          "<tr>"+
                              "<td style='height:80px;'>&nbsp;</td>"+
                          "</tr>"+
                          "<tr>"+
                              "<td style='text-align:center;'>"+
                                "<a href='#' title='logo' target='_blank'>"+
                                  "<img width='60' src='https://i.ibb.co/qnFSkRL/e2850fb0c4f04e0abd3f726e2f718968.png' title='logo' alt='logo'>"+
                                "</a>"+
                              "</td>"+
                          "</tr>"+
                          "<tr>"+
                              "<td style='height:20px;'>&nbsp;</td>"+
                          "</tr>"+
                          "<tr>"+
                              "<td>"+
                                  "<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' style='max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);'>"+
                                      "<tr>"+
                                          "<td style='height:40px;'>&nbsp;</td>"+
                                      "</tr>"+
                                      "<tr>"+
                                          "<td style='padding:0 35px;'>"+
                                              "<h1 style='color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;'>"+
                                              "Hey "+this.state.fullName+"You are Invited TO  : "+this.props.eventTitle+" </h1>"+
                                              "<span style='display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;'></span>"+
                                              "<p style='color:#455056; font-size:15px;line-height:24px; margin:0;'>"+
                                                 " A unique link to Download your"+
                                                 "Tiket has been generated for you. To Download  your Ticket, click the following link ."+
                                              "</p>"+
                                              "<a href='http://localhost:3000/Myticket?id="+this.state.guestID+"' style='background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;'>"+
                                                  "GET YOUR TICKET</a>"+
                                          "</td>"+
                                      "</tr>"+
                                      "<tr>"+
                                          "<td style='height:40px;'>&nbsp;</td>"+
                                      "</tr></table> </td>"+
                              "<td style='height:20px;'>&nbsp;</td>"+
                          "</tr>"+
                          "<tr>"+
                              "<td style='text-align:center;'>"+
                                  "<p style='font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;'>&copy; <strong>www.planEvent.com</strong></p>"+
                             "</td>"+
                          "</tr>"+
                          "<tr>"+
                              "<td style='height:80px;'>&nbsp;</td>"+
                          "</tr>"+
                      "</table>"+
                  "</td>"+
              "</tr>"+
          "</table>";
                
              const formData = new FormData(); 
                formData.append('subject', this.state.subject); 
                formData.append('content',this.state.content); 
                formData.append('destination',this.state.email)  
                //send Email :
                axios({ 
                  method: 'post', 
                  url: "http://localhost:8080/sendinvitation", 
                  data: formData, 
                  headers: {
                    "Content-Type": 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                  }
                  })
                  .then(res => {
                    if (res.status === 200) { 
                    console.log("success");
                    Swal.close();
                    
                    
                    Swal.fire({
                      title: "Succes Email Sent!",
                      text: "Thanks invitation Sent to guest"+this.state.fullname+"succssfylly",
                      icon: "success",
                      
      
                    });
                  
      
              } 
            }).catch(err => { 
              Swal.fire('Data Not Saved', '', 'info')
              
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
      this.setState({ fullName: event.target.value });
      
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
  <Col  md="8">
    
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
      <Button type="submit" >Send Invitation</Button>
    </Form>
  
  </Col>
 );
}
}

export default GuestForm;
