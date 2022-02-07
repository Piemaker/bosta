import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./components/Search";
import { useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ShipmentDetails from "./components/ShipmentTable";
import ClientAddress from "./components/ClientAddress";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState <any>({});
  
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="cairo-font title  text-center text-danger">بوسطة</h1>
          <div className="title-underline"></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Search
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            setData={setData}
          ></Search>
        </Col>
      </Row>
      <Row>
        <Col>
          <Loading isLoading={isLoading}></Loading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Error isError={isError}></Error>
        </Col>
      </Row>
      <Row className = "my-3">
        <Col>
          <ShipmentDetails transitEvents = {data.TransitEvents}></ShipmentDetails>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
