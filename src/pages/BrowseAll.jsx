import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BrowseAll = () => {
  return (
    <div className="cardboot">
      <Container>
        <Row>
          <Col className=".col-md-" >
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/f5/ea/81/f5ea8198546de8fd62736a5aab20e301.jpg"
              />
              <Card.Body>
                <Card.Title>Find images and videos about love, style and boy on We Heart It - the app to get lost in what you love.</Card.Title>
                <Card.Text>R 1,000</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/58/28/5f/58285fdc1958b12b8d7b1957e7df870a.jpg"
              />
              <Card.Body>
                <Card.Title>Custom Adult White Timberlands</Card.Title>
                <Card.Text>R 1,000</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/fa/8c/12/fa8c128f9c835fd14a0b3563ff8edb37.jpg"
              />
              <Card.Body>
                <Card.Title>
                Pink timbs
                </Card.Title>
                <Card.Text>R 1,500</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/30/57/98/3057981db0bacf7785858670ebe3cd98.jpg"
              />
              <Card.Body>
                <Card.Title>Stussy x Timberland 6 Inch Boot</Card.Title>
                <Card.Text>R 2,500</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/13/6a/73/136a73bf95bdc498b3a436479b97ebb1.jpg"
              />
              <Card.Body>
                <Card.Title>Boots Timberland</Card.Title>
                <Card.Text>R 2,550</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=".col-md-">
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/3c/a7/8f/3ca78fb71b20bf8c57bbabdd9be97b81.jpg"
              />
              <Card.Body>
                <Card.Title>Boots Timberland</Card.Title>
                <Card.Text>R 2,550</Card.Text>
                <Button variant="primary">NEW IN</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrowseAll;
