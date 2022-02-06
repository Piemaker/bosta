
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import Search from './components/Search';
import { useState } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <Row className = "mt-5">
        <Col>
        <h1 className = "display-2 text-center">Hello Bosta</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Search setIsError={setIsError} setIsLoading={setIsError}></Search>
        </Col>
      </Row>
      <Row>
        <Col>
        <Loading isLoading = {isLoading} ></Loading>
        </Col>
      </Row>
      <Row>
        <Col>
        <Error isError = {isError}></Error>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
