import React from 'react';
interface Props {
    hub: string;
    date: string;
    time: string;
    details: string;
};

export default function ShipmentRow({hub = "No details", date, time , details = "No details"}: Props) {
  return(<tr>
          <td>{hub}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>{details}</td>
        </tr>)
}