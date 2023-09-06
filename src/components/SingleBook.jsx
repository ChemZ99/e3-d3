import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

function SingleBook(element, index) {
  return (
    <Col key={`${element.category}-${index}`} xs={12} md={6} xl={3}>
      <Card>
        <Card.Img
          style={{ height: "600px", objectFit: "contain" }}
          className="img-fluid"
          variant="top"
          src={element.img}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{element.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
