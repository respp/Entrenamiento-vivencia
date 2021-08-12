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
      className="img-fluid "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='titulo-modal'>Zapatillas Nike Air Max Excee</h3>
      <p>

      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
          <Accordion.Toggle className="botones" as={Button}  size="md" eventKey="0">Descripcion</Accordion.Toggle>
          
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion"> <p>Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.</p></Card.Body>
        </Accordion.Collapse>
      </Card>     
    </Accordion>

      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid "
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='titulo-modal' >Zapatillas Nike Air Max 270</h3>
      <p>
      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
        <Accordion.Toggle className="botones" as={Button} size="md" eventKey="0">Descripcion</Accordion.Toggle>
          
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion"> <p>Con las Zapatillas Nike Air Max 270 inicia tu jornada de ejercicio con comodidad y estilo, la espuma suave le dará comodidad al pie, su cámara de aire con una estética llamativa y visible te dará una mejor amortiguación en cada paso y mejor tracción cuando corrés o caminás.</p> </Card.Body>
        </Accordion.Collapse>
      </Card>     
    </Accordion>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid "
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3 className='titulo-modal'>Zapatillas Nike Air Max Infinity</h3>
      <p>
      <Accordion defaultActiveKey="1">
      <Card className="transparente ">
        <Card.Header>
        <Accordion.Toggle className="botones" as={Button}  size="md" eventKey="0">Descripcion</Accordion.Toggle>
          
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="descripcion"> <p>Las Zapatillas Nike Air Max Infinity con un diseño futurista y atrayente a la vista, y gracias a su tecnología Air max tus pies estarán amortiguados; tendrán mejor reacción y flexibilidad, lo que los hace perfectos para tus necesidades.</p> </Card.Body>
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