import React, { useRef, useState } from "react";
import {
  Form,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Button,
} from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const styles = {
  cardd1: {
    width: "100vw",
    maxWidth: "100vw",
    backgroundColor: "black",
  },
  cardd: {
    backgroundColor: "black",
    margin: "20px",
  },
  col: {
    // width: "915px",
  },
  color: {
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    resize: "none",
    borderColor: "white",
    boxShadow: "none",
  },
};

const Addfilm = (show, handleClose) => {
  const fileInput = useRef(null);
  const handleFileInput = (e) => fileInput.current.click();
  const [showPw, setShowPw] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <Modal style={styles.cardd1} show={show} onHide={handleClose}>
      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>Add Film</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white border-0">
        {/* <Card style={styles.cardd1}>
          <Card.Body className="text-light m-3">
            <Card.Title className="mb-4">Add Film</Card.Title> */}
        <Form>
          {/* Title */}
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="title" style={styles.col}>
                <Form.Control
                  style={styles.color}
                  type="text"
                  placeholder="Title"
                  className="mb-3 text-white formModal"
                  name="title"
                  autoFocus
                />
              </Form.Group>
            </Col>
            <Col>
              {/* Attach*/}
              <Form.Group className="mb-3 ms-1" controlId="attach">
                <input type="file" className="d-none" ref={fileInput} />
                <Button
                  style={styles.color}
                  onClick={handleFileInput}
                  className="text-secondary"
                >
                  Attach Thumbnail <BsPaperclip className="text-danger" />
                </Button>
              </Form.Group>
            </Col>
          </Row>
          {/* year*/}
          <Form.Group className="mb-3" controlId="year">
            <Form.Control
              style={styles.color}
              type="text"
              placeholder="Year"
              className="mb-3 text-white formModal"
              name="year"
            />
          </Form.Group>

          {/* category */}
          <Form.Group className="mb-3" controlId="category">
            <Form.Control
              style={styles.color}
              type="text"
              placeholder="Category"
              className="mb-3 text-white formModal"
              name="category"
            />
          </Form.Group>
          {/* description */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              style={styles.color}
              as="textarea"
              className="mb-3 text-white formModal"
              placeholder="Description"
              name="description"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="titleEpisode"
                style={styles.col}
              >
                <Form.Control
                  style={styles.color}
                  type="text"
                  placeholder="Title Episode"
                  className="mb-3 text-white formModal"
                  name="titleEpisode"
                />
              </Form.Group>
            </Col>
            <Col>
              {/* Attach */}
              <Form.Group className="mb-3 ms-1" controlId="attach">
                <input type="file" className="d-none" ref={fileInput} />
                <Button
                  style={styles.color}
                  onClick={handleFileInput}
                  className="text-secondary"
                >
                  Attach Thumbnail <BsPaperclip className="text-danger" />
                </Button>
              </Form.Group>
            </Col>
          </Row>
          {/* Link Film */}
          <Form.Group className="mb-3" controlId="link">
            <Form.Control
              style={styles.color}
              type="text"
              placeholder="Link FIlm"
              className="mb-3 text-white formModal"
              name="link"
            />
          </Form.Group>

          {/* Address */}
          <Form.Group className="mb-3" controlId="add">
            <input type="file" className="d-none" ref={fileInput} />
            <Button
              style={styles.color}
              onClick={handleFileInput}
              className="text-secondary text-center col-12"
            >
              <AiOutlinePlus className="text-danger" />
            </Button>
          </Form.Group>
          <Form.Group style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="danger"
              className="text-light text-center col-1"
              onClick={handleFileInput}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
        {/* </Card.Body>
        </Card> */}
      </Modal.Body>
    </Modal>
  );
};

export default Addfilm;
