import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

type Props = {
    isLoading : boolean;
};
export default function Loading({isLoading = false}: Props) {
  return (
    <>
      {isLoading ? (
        <Container className = "mt-5">
          <Row>
            <Col >
              <Spinner
                className="d-flex m-auto"
                animation="grow"
                role="status"
                variant="danger"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
