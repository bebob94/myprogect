import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./Components/MyNavBar";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import AreaCards from "./Components/AreaCards";
import DetailsArea from "./Components/DetailsArea";

class App extends Component {
  state = {
    idSelected: null,
  };
  selectedId = (IdCard) => {
    this.setState({ idSelected: IdCard });
  };
  render() {
    return (
      <div>
        <MyNavBar />
        <Container className="mt-5 ">
          <Row>
            <Col xs={8}>
              <AreaCards
                idSelected={this.state.idSelected}
                selectedId={this.selectedId}
              />
            </Col>
            <Col xs={4}>
              <DetailsArea idSelected={this.state.idSelected} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
