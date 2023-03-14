import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
class AreaCards extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ products: data.products });
      } else {
        console.log("error" + response.status);
      }
    } catch (error) {
      console.log(error + "questo error");
    }
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.products.slice(0, 8).map((prod) => {
            return (
              <SingleCard
                key={prod.id}
                products={prod}
                idSelected={this.props.idSelected}
                selectedId={this.props.selectedId}
                idCard={prod.id}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AreaCards;
