import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../App.css";

class SingleCard extends Component {
  render() {
    return (
      <Col>
        <Card
          className="myCard mb-4"
          onClick={() => {
            this.props.selectedId(this.props.idCard);
          }}
          style={{
            border:
              this.props.idSelected === this.props.idCard
                ? "3px solid red"
                : "1px solid black",
          }}
        >
          <Card.Img variant="top" src={this.props.products.images[0]} />
          <Card.Body>
            <Card.Title className="troncare">
              {this.props.products.title}{" "}
            </Card.Title>
            <Card.Text>{this.props.products.brand} </Card.Text>
            <Button variant="dark">{this.props.products.price} $ </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleCard;
