import React from "react";
import './ticket001.css'
import { Row, Col } from "shards-react";
const ticket001 = (props) => (
	
    <div class="ticket" id="ticketToPrint">
	<div class="left">
		<div class="image" style= {{ 
			backgroundImage: "url('"+props.logo+"')"
		}}>
			<p class="admit-one">
				<span>Demo</span>
				<span>Demo</span>
				<span>Demo</span>
			</p>
			<div class="ticket-number">
				<p>
					#{props.qrcodeKey}
				</p>
			</div>
		</div>
		<div class="ticket-info">
			<p>
				<span style={{ fontSize: props.titlesize+'px' }}>{props.eventtitle}</span>
			</p>
			<div>
				<h5 style= {{ fontSize: props.descriptionSize+'px' }}>{props.eventdescription} </h5>
			</div>
			<div class="show-name">
				<h4>{props.fullname}</h4>
			</div>
			
			<div class="time">
			<p>{props.eventdate} <span>AT</span> {props.eventtime}</p>
			<p style={{ fontSize: props.locationSize+'px' }}>{ props.eventlocation }</p>
			</div>
			
		</div>
	</div>
	<div class="right">
		<div class="right-info-container">
			<div class="barcode">
				<img src={props.qrcode} alt="QR code"/>
			</div>
			<p class="ticket-number">
				#{props.qrcodeKey}
			</p>
		</div>
	</div>
</div>

);

export default ticket001;
