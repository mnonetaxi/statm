import NavHeader from '../components/NavHeader'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ManPage() {
  return (
    <div>
        <NavHeader/>

        <Card className="bg-dark text-white">
      <Card.Img src="https://www.footgear.co.za/wp-content/uploads/2023/05/Web-Banner-02-scaled.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>MEN</Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Container>
        <Row>
          <Col className=".col-md-" >
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/6c/b8/97/6cb89753ef16c45a9370a992217dbbf0.jpg"
              />
              <Card.Body>
                <Card.Title>Fila Tennis shoe</Card.Title>
                <Card.Text>R 1,000</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/68/da/5d/68da5d696fbb9e988df31dcbeb01f359.jpg"
              />
              <Card.Body>
                <Card.Title>adidas Rod Laver Sneaker - Urban Outfitters</Card.Title>
                <Card.Text>R 1,000</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/9e/e5/5d/9ee55dc7b82ee4440868fd56005f2a2a.jpg"
              />
              <Card.Body>
                <Card.Title>
                Puma
                </Card.Title>
                <Card.Text>R 1,500</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ManPage