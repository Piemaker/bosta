import React from 'react';
import { Card} from 'react-bootstrap';

type Props = {
    address : string;
};

export default function ClientAddress({address}: Props) {
  return (
    <>
      <h2 className="text-muted cairo-font table-title">عنوان العميل</h2>
      <Card className = "rounded shadow">
        <Card.Body className = "table-bg-muted cairo-font text-muted">{address}.</Card.Body>
      </Card>
    </>
  );
}
