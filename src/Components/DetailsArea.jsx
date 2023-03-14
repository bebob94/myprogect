import { Component } from "react";
import { Container, Card, Badge } from "react-bootstrap";

class DetailsArea extends Component {
  state = {
    product: {},
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.idSelected !== this.props.idSelected) {
      console.log("Props CAMBIATE");
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${this.props.idSelected}`
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          this.setState({ product: data });
        } else {
          console.log("error" + response.status);
        }
      } catch (error) {
        console.log(error + "questo error");
      }
    } else {
      console.log("Props IDENTICHE");
    }
  };
  render() {
    return (
      this.state.product.id && (
        <Container>
          <Card className="detailCard">
            <Card.Img variant="top" src={this.state.product.thumbnail} />
            <Card.Body>
              <Card.Title>{this.state.product.title}</Card.Title>
              <Card.Text>{this.state.product.brand}</Card.Text>
              <Card.Text>{this.state.product.description}</Card.Text>
              <Card.Text>{this.state.product.category}</Card.Text>
              <Card.Text>
                <Badge>{this.state.product.discountPercentage}</Badge>
              </Card.Text>
              <Card.Text>
                <Badge>{this.state.product.stock}</Badge>
              </Card.Text>
              <Card.Text>
                <Badge>{this.state.product.price}</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )
    );
  }
}

export default DetailsArea;
