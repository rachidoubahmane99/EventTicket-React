import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import AdminList from "./AdminList";

const TablesAdmin = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Admins List" subtitle="Admins" className="text-sm-left" />
    </Row>
    <AdminList />
    
  </Container>
);

export default TablesAdmin;
