import Card from "react-bootstrap/Card";

function ProductCard() {
  return (
    <div>
      <div className="mt-5 py-5 text-center">
        <span> WELCOME TO THE BIGGEST BRANDS!! BEST PRICES!!</span>
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.footgear.co.za/wp-content/uploads/2023/04/Promo-Image-1.jpg"
          />
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
