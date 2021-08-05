import React from 'react';

const Footer = ({fecha}) => {

    return( 

      <div className="container-all"> 

        <div className="footer"> 

          <div className="container">       

            <div className="video"><iframe src="https://www.youtube.com/embed/lvfB_p0IiHM" title="YouTube video player"allowfullscreen></iframe></div>                    
            
          </div>

        </div>

        
        <div className="foot">© {fecha} Copyright:TODOS LOS DERECHOS RESERVADOS. Las fotos contenidas en este site, el logotipo y las marcas son propiedad de www.nike.com.ar y/o de sus respectivos titulares. Está prohibida la reproducción total o parcial, sin la expresa autorización de la administradora de la tienda virtual. Nike, empresa con domicilio en Autopista Panamericana KM 25,6 - Don Torcuato de la Provincia de Buenos Aires – Argentina.
          <a href="https://www.nike.com/ar/"> Nike.com</a>       
        </div>

      </div>    
    
     );
    }
 
export default Footer;