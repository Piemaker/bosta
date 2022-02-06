import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./components/Search";
import { useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ShipmentDetails from "./components/ShipmentDetails";
import moment from "moment";

function App() {
  console.log(moment("2020-07-22T12:27:41.141Z").format("L"));
  console.log(moment("2020-07-22T12:27:41.141Z").format("LT"));
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
            setIsLoading={setIsError}
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
      <Row>
        <Col>
          <ShipmentDetails transitEvents = {data.TransitEvents}></ShipmentDetails>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
