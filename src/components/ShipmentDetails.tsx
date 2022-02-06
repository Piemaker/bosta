import React from 'react';
import { Table } from 'react-bootstrap';

type Props = {

};

export default function ShipmentDetails({}: Props) {
  return (
    <Table borderless hover className="shadow border-1 rounded cairo-font my-3">
      <thead className="text-muted table-bg-muted">
        <tr>
          <th>الفرع</th>
          <th>التاريخ </th>
          <th>الوقت</th>
          <th>التفاصيل</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
