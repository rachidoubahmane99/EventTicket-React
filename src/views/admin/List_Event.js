import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import Editor from "../../components/add-new-post/Editor";
import SidebarActions from "../../components/add-new-post/SidebarActions";
import SidebarCategories from "../../components/add-new-post/SidebarCategories";
import ListEvent from "./listEvent";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Events List" subtitle="Events" className="text-sm-left" />
    </Row>
    <ListEvent />
  </Container>
);

export default AddNewPost;
