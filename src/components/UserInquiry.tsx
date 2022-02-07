import { Button, Card, Col, Row} from 'react-bootstrap';
import question from "../assets/question.svg"
export default function UserInquiry() {
  return (
    <Card className="rounded shadow">
      <Card.Body className="cairo-font">
        <Row>
          <Col xs="4">
            <img src={question} className="img-fluid" alt="Inquiry svg" />
          </Col>
          <Col xs="8">
            <p className = "inquiry-">هل توجد مشكلة في شحنتك؟!</p>
            <Button variant="danger" className="btn w-100 rounded-pill ">
              ابلاع عن مشكلة
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
