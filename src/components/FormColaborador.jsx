import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormColaborador = (props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const guardarNombre = (e) => {
    setNombre(e.target.value);
  };
  const guardarEmail = (e) => {
    setEmail(e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
    const colaborador = {
      nombre: nombre,
      correo: email,
    };

    props.guardarColaborador(colaborador);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          <Form onSubmit={enviarForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={nombre}
                onChange={guardarNombre}
                type="text"
                placeholder="Ingresar Nombre"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={guardarEmail}
                type="text"
                placeholder="Ingresar Email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormColaborador;
