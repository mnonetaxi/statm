import Card from "react-bootstrap/Card";

function ProductCard() {
  return (
    <div>
      <div className="mt-5 py-5 text-center">
        <span> WELCOME TO THE BIGGEST BRANDS!! BEST PRICES!!</span>
      </div>

      <div className="cardContainer">
        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/564x/f5/6b/5b/f56b5b7e02608bc1746853367e096302.jpg"
          />
        </Card>

        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/564x/e4/9a/88/e49a88c196159a95baf187f30e49b59f.jpg"
          />
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
