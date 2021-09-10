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
  Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EventManagerList from "./listEventManager";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Event Managers List" subtitle="Event Managers" className="text-sm-left" />
        </Row>
        <EventManagerList />
      </Container>
    );
  }
}

export default BlogPosts;
