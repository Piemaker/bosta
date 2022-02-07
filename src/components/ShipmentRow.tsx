import React from 'react';
interface Props {
    hub?: string;
    date: string;
    time: string;
    details: string;
    reason? : string;
};

export default function ShipmentRow({hub = "No details", date, time , details = "No details", reason = ""}: Props) {
  return(<tr className = "table-row-font text-muted">
          <td>{hub}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td className = "d-flex flex-column">{details} <span className = "text-warning">{reason}</span></td>
        </tr>)
}