import moment from "moment";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { detailsArabicMapping, hubArabicMapping, isValidKey } from "../util";
import ClientAddress from "./ClientAddress";
import ShipmentRow from "./ShipmentRow";
import UserInquiry from "./UserInquiry";
interface TransitEvent {
  state: string;
  timestamp: string;
  hub?: string;
  reason? : string;
}
interface Props {
  transitEvents: TransitEvent[];
}
export default function ShipmentDetails({ transitEvents = [] }: Props) {
  return (
    <>
      {transitEvents.length ? (
        <Container className="p-0 cairo-font">
          <Row>
            <Col md = "8">
              <h2 className="text-muted table-title">تفاصيل الشحنة</h2>

              <Table
                borderless
                hover
                bordered
                className="shadow cairo-font"
              >
                <thead className="table-bg-muted table-hd-font">
                  <tr>
                    <th>الفرع</th>
                    <th>التاريخ </th>
                    <th>الوقت</th>
                    <th>التفاصيل</th>
                  </tr>
                </thead>
                <tbody>
                  {transitEvents.map((event, index) => {
                    //TODO handle translation of hubs
                    let reason = "";
                    let hub = "لا توجد بيانات";
                    let details = "No details";
                    const { state, timestamp } = event;
                    if (event.hub) {
                      hub = event.hub;
                    }
                    if (event.reason) {
                      reason = event.reason;
                    }
                    const date = moment(timestamp).format("LT");
                    const time = moment(timestamp).format("L");
                    if (isValidKey(state, detailsArabicMapping)) {
                      details = detailsArabicMapping[state];
                    }
                    if (isValidKey(hub, hubArabicMapping)) {
                      hub = hubArabicMapping[hub];
                    }
                    return (
                      <ShipmentRow
                        key={index}
                        date={date}
                        details={details}
                        hub={hub}
                        time={time}
                        reason={reason}
                      ></ShipmentRow>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col md = "4">
             <ClientAddress address="امبابة شارع طلعت حرب مدينة العُمال بجوار البرنس منزل 17 بلوك 22 ,, cairo"></ClientAddress>
             <Row className = "mt-2">
               <Col>
               <UserInquiry></UserInquiry>
               </Col>
             </Row>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
