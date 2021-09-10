import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import SmallStats from "../../components/common/SmallStats";
import UsersOverview from "../../components/blog/UsersOverview";
import UsersByDevice from "../../components/blog/UsersByDevice";
const axios = require('axios');


class BlogOverviewAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state=this.initialState;
    }

    initialState = {
      Events:"", EventManagers:"",Guests:""
    }

    componentDidMount() {
      axios.get('http://localhost:8080/getCountEvents')
          .then(response => response.data)
          .then((data) => {
              this.setState({Events:data});
          });

      axios.get('http://localhost:8080/getCountEventManager')
          .then(response => response.data)
          .then((data) => {
              this.setState({EventManagers:data});
          });

      axios.get('http://localhost:8080/getCountGuests')
          .then(response => response.data)
          .then((data) => {
              this.setState({Guests:data});
          });
    }

    render(){

      let smallStats = [
        {
          label: "Events",
          value: this.state.Events,
          percentage: "",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        },
        {
          label: "Event Manager",
          value: this.state.EventManagers,
          percentage: "",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Guests",
          value: this.state.Guests,
          percentage: "",
          increase: true,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,180,0,0.1)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        }
      ]

        return (
          <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle title="Blog Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
          </Row>
      
          {/* Small Stats Blocks */}
          <Row>
            {smallStats.map((stats, idx) => (
              <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                <SmallStats
                  id={`small-stats-${idx}`}
                  variation="1"
                  chartData={stats.datasets}
                  chartLabels={stats.chartLabels}
                  label={stats.label}
                  value={stats.value}
                  percentage={stats.percentage}
                  increase={stats.increase}
                  decrease={stats.decrease}
                />
              </Col>
            ))}
          </Row>
      
          <Row>
            {/* Users Overview */}
            <Col lg="8" md="12" sm="12" className="mb-4">
              <UsersOverview />
            </Col>
      
            {/* Users by Device */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <UsersByDevice />
            </Col>
          </Row>
        </Container>
        );
    }
}

export default BlogOverviewAdmin;
