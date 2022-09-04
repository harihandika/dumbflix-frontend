import { Form, Button, Card } from 'react-bootstrap';

const styles = {
  form: {
    position: "relative",
    width: "316px",
    height: "300px",
    background: "#1F1F1F",
    padding: "30px",
    alignItems: "center",
    justifyContent: "center",
    margin: "90px 350px",
    borderRadius: "10px",
  },
  size: {
    height:"30px",
    backgroundColor: "rgba(210, 210, 210, 0.25)",
    border: "2px solid #D2D2D2",
    borderRadius: "5px",
  },
};

function TextControlsExample() {
  return (
    <Card.Body style={styles.form}>
      <Form>
    <Card.Title className="text-light mb-4 fw-bold" >Login</Card.Title>
      <Form.Group className="mb-3" controlId="exampleForm.email">
        <Form.Control style={styles.size} type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.password">
        <Form.Control style={styles.size} type="pasword" placeholder="Password" />
      </Form.Group>
      <Button variant="red" className="mt-3 col-12 p-2 text-light fw-bold bg-danger
      ">Login</Button>{' '}  
      <span className="text-secondary mt-3 text-center">Already have account? Klik Here</span>
    </Form>
    </Card.Body>
  );
}

export default TextControlsExample;