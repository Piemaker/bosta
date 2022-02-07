import React from "react";
import { FiTruck } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
type Props = {
  trackingNumber: string;
  state: String;
  date: string;
  vendor: string;
  expectedDate: string;
};

export default function StatusBar({
  trackingNumber,
  state,
  date,
  vendor,
  expectedDate,
}: Props) {
  return (
    <Container className="p-0 cairo-font text-muted border border-1  rounded shadow">
      <Row className="status-bar text-center m-0 border border-1 rounded p-2">
        <Col>
          <h3>رقم الشحنة {trackingNumber}</h3>
          <p>{state}</p>
        </Col>
        <Col>
          <Col>
            <h3>آخر تحديث</h3>
            <p>{date}</p>
          </Col>
        </Col>

        <Col>
          <h3>اسم التاجر</h3>
          <p>{vendor}</p>
        </Col>
        <Col>
          <h3>موعد التسليم خلال</h3>
          <p>{expectedDate}</p>
        </Col>
      </Row>
      <Row className="m-0 border border-1 rounded">
        <Col>
          <div className="track shadow">
            <div className="step active">
              <span className="icon">
                <AiFillCheckCircle />
              </span>
              <span className="text">تم إنشاء الشحنة</span>
            </div>
            <div className="step active">
              <span className="icon">
                <AiFillCheckCircle />
              </span>
              <span className="text">تم استلام الشحنة من التاجر</span>
            </div>
            <div className="step">
              <span className="icon">
                <FiTruck />
              </span>
              <span className="text">الشحنة خرجت للتسليم</span>
            </div>
            <div className="step">
              <span className="icon">
                <BiPackage />
              </span>
              <span className="text">تم التسليم</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
