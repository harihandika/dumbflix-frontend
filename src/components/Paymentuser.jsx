import { Button, Form } from "react-bootstrap";
import PaymentDescription from "../img/PaymentDescription.png";

const Paymentuser = () => {
  return (
    <Form style={{ marginTop: "8rem" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            color: "whitesmoke",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Premium
        </h1>
        <p style={{ textAlign: "center" }}>
          <img src={PaymentDescription} alt="" />
        </p>
      </div>
      <Form.Group
        style={{ width: "25rem", textAlign: "center", marginLeft: "30rem" }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Control
          className="bg-dark text-light"
          type="email"
          placeholder="Input your number account"
        />
        <Form.Text className="text-muted">
          We'll never share your account number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        style={{ width: "25rem", marginLeft: "30rem" }}
        controlId="formFile"
        className="mb-3"
      >
        <Form.Control className="bg-dark text-light" type="file" />
      </Form.Group>
      <Button
        style={{ width: "25rem", marginLeft: "30rem" }}
        variant="danger"
        type="submit"
      >
        Kirim
      </Button>
    </Form>
  );
};

export default Paymentuser;
