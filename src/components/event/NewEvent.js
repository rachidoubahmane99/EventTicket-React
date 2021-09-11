import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormTextarea,
  FormInput,
  FormSelect,
  Slider,
  Button
} from "shards-react";

import PageTitle from "../common/PageTitle";
import Colors from "../tickets/Colors";
import axios from "axios";
import Swal from 'sweetalert2'






class NewEvent extends React.Component {
    constructor(props) {
      super(props);
      //this.state = { title: '' };
      //this.state = { titlesize: '' };
      //this.state = { file: null };
      //this.state = { description : ''}
      //this.state = { descriptionsize : ''}
      //this.state = { location : ''}
      //this.state = { locationsize : ''}
      //this.state = { date : ''}
      //this.state = { time : ''}
      //this.state = { capacity : ''}
      this.state = this.initialState;
      this.handleChangeimage = this.handleChangeimage.bind(this)
      this.submitEvent = this.submitEvent.bind(this)

    }

   

    initialState = {
    title: '',
    titlesize: 12,
    file: null ,
    description : '',
    descriptionsize : 10,
    location : '',
    locationsize : 10,
    date : '',
    time : '' ,
    capacity :'',
    filedata:'',
    status:'',
    active : 1,

    };
    
    
    submitEvent = event=>{
      event.preventDefault()
      const Event = {
        title: this.state.title,
        description: this.state.description,
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        capacity:  this.state.capacity,
        state: this.state.status,
        active : this.state.active,
        customTicket: {
          logo:	"logo File",
          titleSize:	this.state.titlesize[0],
          descriptionSize:	this.state.descriptionsize[0],
          locationSize:	this.state.locationsize[0],
          mainTicket :{
            "id":1
          }
        },
        eventManager: {
          "id" : 1
        }

    
      }
    
      
   
    const json = JSON.stringify(Event);
 
    const formData = new FormData();
    formData.append('file',this.state.filedata)
    formData.append('Event', json); //JSON
    Swal.fire({
      title: "You want to save ?",
      html:
      ' <p> <b> Event Title  :</b>  ' + Event.title + 
      '<p> <b> Description  :  </b>' + Event.description+
      '<p> <b>Location :  </b>' + Event.location+
      '<p> <b> Date and Time   : </b>  ' + Event.date +'   AT : ' +Event.time+
      '<p> <b> Capacity  : </b>  ' + Event.capacity+
      '<p> <b> Status  : </b>  ' + Event.state
      
  ,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Saving Your Event...',
          html: 'Please wait We are Saving Your Event',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        });
      axios({ 
        method: 'post', 
        url: "http://localhost:8080/events/save/", 
        data: formData, 
        headers: {
          "Content-Type": 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
        }) 
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            Swal.close();
            Swal.fire({
              title: "Your Event Is Saved Successfully!",
              icon: "success",
              

            });
          } 
        }).catch(err => { 
          Swal.fire('Event Not Saved', '', 'info')
       
      
        
        
      });
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  });
    }

    handleTitle = event => {
      this.setState({ title: event.target.value });
      
    }
    handleStatus = event => {
      this.setState({ status: event.target.value });
      
    }
    
    
    handleTtitlesize = newv => {
      this.setState({ titlesize: newv });
    }
    handleDescription = event => {
      this.setState({ description: event.target.value });
    }
    
    handleDescriptionsize = newv => {
      this.setState({ descriptionsize: newv });
    }
    handleLocation = event => {
      this.setState({ location: event.target.value });
    }
    
    handleLocationsize = newv => {
      this.setState({ locationsize: newv });
    }

    handleDate = event => {
      this.setState({ date: event.target.value });
    }
    handleTime = event => {
      this.setState({ time: event.target.value });
    }


    handleCapacity = event => {
      this.setState({ capacity: event.target.value });
    }

    handleChangeimage(event) {
      if (event.target.files && event.target.files[0]) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0]),
          filedata:event.target.files[0]
        });
      }}
    


    render() {
      return (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Create New Event"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <Colors />

      <Row>
        <Col lg="8" className="mb-4">
          

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">New Event</h6>
            </CardHeader>
            
            



            <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form   onSubmit = { this.submitEvent }>
            <FormGroup>
              <label htmlFor="feInputTitle">Title</label>
              <FormInput
               id="feInputTitle" 
               placeholder="Event Title here" 
              type="Text"
              value={this.state.title}
              onChange={this.handleTitle}
               />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputDescription">Description</label>
              
              <FormTextarea 
                id="feInputDescription"
                placeholder="This is your Event Description"
                onChange={this.handleDescription}
                value={this.state.description}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="feInputAddress">Address</label>
              <FormInput 
              id="feInputAddress" 
              placeholder="1234 Main St"
              value={this.state.location}
              onChange={this.handleLocation} />
              
            </FormGroup>


            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">Date</label>
                <FormInput id="feInputCity"
                type="date"
                onChange={this.handleDate}
                value={this.state.date}
                />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputCity">Hour</label>
                <FormInput id="feInputCity"
                type="time" 
                onChange={this.handleTime}
                value={this.state.time}
                />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputZip">Capacity</label>
                <FormInput 
                id="feInputZip"
                type="number"
                min="1"
                onChange={this.handleCapacity}
                value={this.state.capacity}
                 />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">Status</label>
                <FormSelect id="feInputState"
                 onChange={this.handleStatus}
                 value={this.state.status}
                 >
                  <option   value="public"  onChange={this.handleStatus}>public</option>
                  <option  value="private"  onChange={this.handleStatus}>private</option>
                </FormSelect>
              </Col>
              
              
            </Row>
            <Button type="submit" >Create New Event</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>




          </Card>
          
        </Col>
        <Col lg="4" className="mb-4">
                  <Card small>
                      {/* Files & Dropdowns */}
                      <CardHeader className="border-bottom">
                        <h6 className="m-0">Costumize Your Ticket</h6>
                      </CardHeader>

                      <ListGroup flush>
                        <ListGroupItem className="px-3">
                            <strong className="text-muted d-block mb-2">
                              Upload Your Event Logo
                            </strong>
                            <div className="custom-file mb-3">
                            <input type="file" className="custom-file-input" id="customFile2"
                            onChange={this.handleChangeimage}
                            accept=".png, .jpg, .jpeg"
                            />
                            <label className="custom-file-label" htmlFor="customFile2">
                              Choose file...
                            </label>
                            
                          </div>

                          <strong className="text-muted d-block">Event Title</strong>
                <Slider
                  theme="success"
                  className="my-4"
                  connect={[true, false]}
                  start={ this.state.titlesize }
                  range={{ min: 0, max: 100 }}
                  tooltips
                  step={1}
                  
                  onChange={this.handleTtitlesize}
                  onAfterChange={this.setValue}
                  
                />
                <strong className="text-muted d-block">Event Description</strong>
                <Slider
                  theme="info"
                  className="my-4"
                  connect={[true, false]}
                  start={ this.state.descriptionsize }
                  range={{ min: 0, max: 100 }}
                  step={1}
                  tooltips
                  onChange={this.handleDescriptionsize}
                />
                <strong className="text-muted d-block">Event Location</strong>
                <Slider
                  theme="light"
                  className="my-4"
                  connect={[true, false]}
                  start={ this.state.locationsize }
                  range={{ min: 0, max: 100 }}
                  step={1}
                  tooltips
                  onChange={this.handleLocationsize}
                />
      
   
              </ListGroupItem>
            </ListGroup>
          </Card>
        
         

          
        </Col>
      </Row>

      <Container fluid className="main-content-container px-4">
      



      <Row class="mb-2">
		<Col lg="8">
    <CardHeader className="border-bottom">
                        <h6 className="m-0">Ticket Preview</h6>
    </CardHeader>
    <div class="ticket">
	<div class="left">
		<div class="image" style= {{ backgroundImage : "url("+this.state.file+")"
    }}
    >
			<p class="admit-one">
				<span>Demo</span>
				<span>Demo</span>
				<span>Demo</span>
			</p>
			<div class="ticket-number">
				<p>
					#20030220
				</p>
			</div>
		</div>
		<div class="ticket-info">
			<p>
				<span style={{ fontSize: this.state.titlesize+'px' }}>{ this.state.title} </span>
			</p>
			<div>
				<h5 style= {{ fontSize: this.state.descriptionsize+'px' }}>{ this.state.description } </h5>
			</div>
			<div class="show-name">
				<h4>Jhon Doe</h4>
			</div>
			
			<div class="time">
				<p>{this.state.date} <span>AT</span> {this.state.time}</p>
				<p style={{ fontSize: this.state.locationsize+'px' }}>{ this.state.location }</p>
			</div>
			
		</div>
	</div>
	<div class="right">
		<div class="right-info-container">
			<div class="barcode">
				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
			</div>
			<p class="ticket-number">
				#20030220
			</p>
		</div>
	</div>
</div>
</Col>
</Row>







      </Container>
    </Container>
    
  </div>
  
  );
}
}

export default NewEvent;
