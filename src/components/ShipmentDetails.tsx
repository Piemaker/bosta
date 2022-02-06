import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { arabicMapping, isValidKey } from "../util";
import ShipmentRow from "./ShipmentRow";
interface TransitEvent {
  state: string;
  timestamp: string;
  hub?: string;
}
interface Props {
  transitEvents: TransitEvent[];
}
export default function ShipmentDetails({ transitEvents = [] }: Props) {
  return (
    <>
      {transitEvents.length ? (
        <Table
          borderless
          hover
          className="shadow border-1 rounded cairo-font my-3"
        >
          <thead className="text-muted table-bg-muted">
            <tr>
              <th>الفرع</th>
              <th>التاريخ </th>
              <th>الوقت</th>
              <th>التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {transitEvents.map((event, index) => {
              let hub = "No details";
              let details = "No details";
              const { state, timestamp } = event;
              if (event.hub) {
                hub = event.hub;
              }
              const date = moment(timestamp).format("LT");
              const time = moment(timestamp).format("L");
              if (isValidKey(state)) {
                details = arabicMapping[state];
              }
              return (
                <ShipmentRow key = {index}
                  date={date}
                  details={details}
                  hub={hub}
                  time={time}
                ></ShipmentRow>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <></>
      )}
    </>
  );
}
