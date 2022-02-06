import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
type Props = {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const Search: React.FC<Props> = ({ setIsError, setIsLoading }) => {
  const defaultURL = "https://tracking.bosta.co/shipments/track/";
  const [packageId, setPackageId] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const fetchData = async (url: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetch(url);
      console.log(
        "🚀 ~ file: Search.tsx ~ line 16 ~ fetchData ~ response",
        response
      );
      if (response.ok) {
        const data = await response.json();
        console.log("🚀 ~ file: Search.tsx ~ line 17 ~ fetchData ~ data", data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("🚀 ~ file: Search.tsx ~ line 23 ~ fetchData ~ error", error);
      // set error state to render error component
      setIsLoading(false);
      setIsError(true);
    }
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (packageId) {
      fetchData(defaultURL + packageId);
      setPackageId("");
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <Form className="cairo-font" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-danger display-6">
          <b>تتبع شحنتك</b>
        </Form.Label>
        <Row>
          <Col xs="10" md="11" >
            <Form.Control
              type="text"
              placeholder="رقم الشحنة"
              ref={inputRef}
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
            />
          </Col>
          <Col xs="2" md="1">
            <Button variant="danger" type="submit" className="rounded-circle">
              <FaSearch></FaSearch>
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default Search;
