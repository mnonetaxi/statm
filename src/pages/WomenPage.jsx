import NavHeader from '../components/NavHeader'
import Card from 'react-bootstrap/Card';

function WomenPage() {
  return (
    <div>
        <NavHeader/>

        <Card className="bg-dark text-white">
      <Card.Img src="https://www.footgear.co.za/wp-content/uploads/2023/05/Web-Banner-02-scaled.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>WOMEN</Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
        
    </div>
  )
}

export default WomenPage