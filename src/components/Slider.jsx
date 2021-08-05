import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Button, Accordion, Card} from 'react-bootstrap';
import img1 from '../img/nike.jpg';
import img2 from '../img/nike2.jpg';
import img3 from '../img/nike3.jpg';
const Slider = () => {
  
    return( 
      
      <Carousel className="slider">
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Zapatillas Nike Air Max Excee</h3>
      <p>

      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
          <Accordion.Toggle className="botones" as={Button} variant="info" size="sm" eventKey="0">Descripcion</Accordion.Toggle>
          <Button variant="info" href='https://www.dexter.com.ar/zapatillas-nike-air-max-excee/NI_CD5432-003.html' size="sm" className="botones">Ver</Button>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion">Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.</Card.Body>
        </Accordion.Collapse>
      </Card>     
    </Accordion>

      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Zapatillas Nike Air Max 270</h3>
      <p>
      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
          <Accordion.Toggle className="botones" as={Button} variant="info" size="sm" eventKey="0">Descripcion</Accordion.Toggle>
          <Button href= 'https://www.moovbydexter.com.ar/zapatillas-nike-air-max-270/NI_AH6789-107.html'variant="info" size="sm" className="botones">Ver</Button>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion">Con las Zapatillas Nike Air Max 270 inicia tu jornada de ejercicio con comodidad y estilo, la espuma suave le dará comodidad al pie, su cámara de aire con una estética llamativa y visible te dará una mejor amortiguación en cada paso y mejor tracción cuando corrés o caminás.</Card.Body>
        </Accordion.Collapse>
      </Card>     
    </Accordion>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3>Zapatillas Nike Air Max Infinity</h3>
      <p>
      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
          <Accordion.Toggle className="botones" as={Button} variant="info" size="sm" eventKey="0">Descripcion</Accordion.Toggle>
          <Button href='https://www.dexter.com.ar/zapatillas-nike-air-max-infinity/NI_BQ3999-003_8_1.html' variant="info" size="sm" className="botones">Ver</Button>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion">Las Zapatillas Nike Air Max Infinity con un diseño futurista y atrayente a la vista, y gracias a su tecnología Air max tus pies estarán amortiguados; tendrán mejor reacción y flexibilidad, lo que los hace perfectos para tus necesidades.</Card.Body>
        </Accordion.Collapse>
      </Card>     
    </Accordion>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }

export default Slider;