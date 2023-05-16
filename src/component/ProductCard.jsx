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
            src="https://www.footgear.co.za/wp-content/uploads/2023/04/Promo-Image-1.jpg"
          />
        </Card>

        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src="https://www.footgear.co.za/wp-content/uploads/2021/08/Promo-Image-1.png"
          />
        </Card>
    

    </div>
    </div>
  );
}

export default ProductCard;
