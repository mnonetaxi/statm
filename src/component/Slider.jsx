import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.footgear.co.za/wp-content/uploads/2023/04/Merrell-webslider-01-1-scaled.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.footgear.co.za/wp-content/uploads/2023/05/FG-GET-BOOTED-Home-Page-Banner.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.footgear.co.za/wp-content/uploads/2023/04/Reebok-promo_webslider-scaled.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div>
      <div className='line'>It started with a simple idea: Create quality, well-designed products that I wanted myself.</div>
    </div>
    </div>
  )
}

export default Slider