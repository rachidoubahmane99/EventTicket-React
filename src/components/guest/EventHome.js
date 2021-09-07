import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
class EventHome extends React.Component {
    render() {
        return ( 

            <Card>
                <CardBody>
                    <CardTitle>Event Title</CardTitle>
                    <CardSubtitle>Event Description</CardSubtitle>
                    Important Notice hre : blab
                </CardBody>
            </Card>
                
            ); 
    }
}
export default EventHome