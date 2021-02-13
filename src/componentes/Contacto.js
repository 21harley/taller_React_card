import React from 'react';
import menuShow from './menuShow';

class Contacto extends React.Component{
   componentDidMount(){
      menuShow(document,3);
   }
   render(){
       return(
        <div className="fondo">
           <img className="fondo-img" alt="Contacto" src="https://i.pinimg.com/originals/a7/6c/73/a76c73311536c14e118c28e85d9ddada.jpg"/>
           <div className="fondo-title-pos">
                <a className="fondo-title" target="_blank" rel="noreferrer" href="https://github.com/21harley">Contacto</a>
           </div>
        </div>
       );
   }
}

export default Contacto;