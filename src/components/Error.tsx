import { Alert, Col, Container, Row } from "react-bootstrap";

type Props = { isError: boolean };

export default function Error({ isError = false }: Props) {
  return (
    <>
      {isError ? (
        <Container className = "mt-3">
          <Row>
            <Col md = "6" className = "p-0 m-auto">
              <Alert className="cairo-font text-center" variant={"danger"}>
                رقم الشحنة هذا غير صالح
              </Alert>
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
