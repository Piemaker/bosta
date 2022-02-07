import moment from "moment";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { arabicMapping, isValidKey } from "../util";
import ShipmentRow from "./ShipmentRow";
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
        <Container className="my-3 p-0 cairo-font">
          <Row>
            <Col>
              <h2 className="text-muted table-title">تفاصيل الشحنة</h2>
              <Table
                borderless
                hover
                className="shadow border-1 rounded cairo-font my-3"
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
                    if (isValidKey(state)) {
                      details = arabicMapping[state];
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
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
