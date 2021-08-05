import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/jordan.png';
import img2 from '../img/logo1.png';
import {Button, Modal, CloseButton} from 'react-bootstrap';
function Modall(){
    
  const [show, setShow] = useState(false);

        return (
            <div className="modalbg">
              <Button variant="light" onClick={() => setShow(true)}>
                Iniciar sesión
              </Button>
        
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header clasName='boton-cerrar' closeButton aria-label="Hide">
                  <Modal.Title className='titulo-modal' id="example-custom-modal-styling-title">
                    NIKE
                  </Modal.Title>
                  <img  src={img2} width="112" height="35" alt="..."></img>
                </Modal.Header>
                <Modal.Body className='texto-modal'>
                  <p>
                  Aca puedo poner mucho texto porque este es un modal gendi? Debitis amet quae unde
                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                    ipsam atque a dolores quisquam quisquam adipisci possimus
                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                    deleniti rem!
                  </p>
                </Modal.Body>
              </Modal>
              <img className='jordan' src={img1} width="50" height="50" alt="..."></img>
            </div>
          );
        }

export default Modall;