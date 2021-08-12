import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/jordan.png';
import img2 from '../img/logo1.png';
import {Button, Modal, CloseButton} from 'react-bootstrap';
import Portis from '@portis/web3';
import Web3 from 'web3';

function Modall(){

  const [show, setShow] = useState(false);
  


  const connectMetamask = () =>{



    var Web3 = require('web3');
        var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

        let accounts = [];
        let web3_provider;
        

        


        if (window.ethereum) {
            web3_provider = window.ethereum.enable();
            console.log(window.ethereum);

            web3.eth.getAccounts((error, accounts) => console.log(accounts[0]));
            
            window.ethereum.request({
              method: 'eth_sendTransaction',
              params: [
                {
                  from: 0x37d490F11f49Be7704Cb3320a0E918aC045cb65A, // accounts[0],
                  to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                },
              ],
            }).then(r=>console.log(r)).catch(e=>console.log(e))

            

        } else {
            alert("Descargue MetaMask");
        }

    
        



    }


const connectPortis = () => {

  const portis = new Portis('93b768a1-12b2-4c87-be0f-ed7314f7a856', 'mainnet');
  const web3 = new Web3(portis.provider);

  web3.eth.getAccounts()
  .then(accounts => console.log(accounts))
  .catch(error => console.log(error));

  const to = "0xb1690C08E213a35Ed9bAb7B318D114420FB57d8C";
const amountInEther = 12;
const gasLimit = "0x0";
const gasPrice = "0x0";

(async () => {
  const accounts = await portis.provider.enable();
  const response = await web3.currentProvider.send("eth_sendTransaction", [
    {
      from: accounts[0],
      to: to,
      value: etherToHexWei(amountInEther),
      gas: gasLimit,
      gasPrice: gasPrice
    }
  ]);
  console.log(response);
})();

function etherToHexWei(value) {
  const wei = value * 10 ** 18;
  const hexWei = wei.toString(16);
  return `0x${hexWei}`;
}


}

        return (

            <div>
              <Button className='botones-modal' onClick={() => setShow(true)}>
                Comprar
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
                  

                  <Button variant="warning" size="lg" onClick={connectMetamask} >Comprar con Metamask </Button>
                  
                  <Button variant="success" size="lg" onClick={connectPortis} >Comprar con Portis </Button>


                </Modal.Body>
              </Modal>
              
            </div>
          );
        }

export default Modall;