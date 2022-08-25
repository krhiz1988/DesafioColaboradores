import { Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TablaColaboradores = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6" className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre Colaborador</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {props.colaboradores.map((colaborador, index) => (
                <tr key={index}>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TablaColaboradores;
