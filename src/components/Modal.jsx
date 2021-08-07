import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/jordan.png';
import img2 from '../img/logo1.png';
import {Button, Modal, CloseButton} from 'react-bootstrap';
import * as web3 from 'web3';
function Modall(){
    
  const [show, setShow] = useState(false);
  const connect = () => {

    if(window.ethereum){
        window.ethereum.enable();
        alert("Conectandose...");

        
    }else{
        alert("Por favor Descargue Metamask, https://metamask.io/ ");
    }


}

        return (
            <div className="modalbg">
              <Button className='botones-modal' variant="light" onClick={() => setShow(true)}>
                Iniciar sesión
              </Button>
        
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton aria-label="Hide">
                  <Modal.Title className='titulo-modal' id="example-custom-modal-styling-title">
                    NIKE
                  </Modal.Title>
                  <img  src={img2} width="112" height="35" alt="..."></img>
                </Modal.Header>                
                <Modal.Body>
                  <div className='formulario-modal'>
                  <p>Hazte miembro de Nike para obtener los mejores productos, inspiración e historias del deporte.<a href="https://www.nike.com/ar/membresia"> Más información</a></p>
                  <input type="text" className='texto1' name="texto1" placeholder="Correo electrónico o número de telefono"></input>
                  <input type="password" className='texto2' name="texto2" placeholder="Contraseña"></input>
                  <Button variant='primary'>Entrar</Button>
                  <Button variant='link'>¿Has olvidado la contraseña?</Button>
                  <Button variant='success'>Crear cuenta nueva</Button>
                  <p>____________________________________________________________</p>                  
                  </div>

                  <Button variant='outline-secondary' onClick={connect} >Conectar Billetera para Comprar</Button>

                </Modal.Body>
              </Modal>
              <Button className='botones-modal' variant="primary">
                Registrarse
              </Button>
              <img className='jordan' src={img1} width="50" height="50" alt="..."></img>
            </div>
          );
        }

export default Modall;