import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./components/Search";
import { useState } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ShipmentDetails from "./components/ShipmentTable";
import StatusBar from "./components/StatusBar";
import moment from "moment";


function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);
  const [data, setData] = useState<any>();
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
            setIsDataReady={setIsDataReady}
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
      {isDataReady && (
        <>
          <Row>
            <Col className="my-3">
              <StatusBar
                vendor="SOUQ"
                state={data.CurrentStatus.state}
                trackingNumber={data.TrackingNumber}
                expectedDate={moment(data.CurrentStatus.timestamp).format("LL")}
                date={moment(
                  data.TransitEvents[data.TransitEvents.length - 1].timestamp
                ).locale("ar").format("LLLL")}
              ></StatusBar>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <ShipmentDetails
                transitEvents={data.TransitEvents}
              ></ShipmentDetails>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default App;
