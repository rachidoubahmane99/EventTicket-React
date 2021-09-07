import React from "react";
import { ListGroupItem, Slider } from "shards-react";

const Sliders = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">Event Title</strong>
      <Slider
        theme="success"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
      <strong className="text-muted d-block">Event Description</strong>
      <Slider
        theme="info"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
      <strong className="text-muted d-block">Event Location</strong>
      <Slider
        theme="light"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
      
    </div>
  </ListGroupItem>
);

export default Sliders;
