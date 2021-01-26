import React from 'react';
import '../styles/Card.css';

class Card extends React.Component{
   render(){
       return(
         <div className="Card">
             <div className="header-Card">
                <div className="header-top">
                    <span></span>
                    <div className="pos-buscar">
                        <div className="buscar"></div>
                    </div>
                    <div className="pos-punto-v">
                        <div className="puntos-v"></div>
                    </div>    
                </div>
                <div className="title-1">Hello</div>
                <div className="number">
                   01
                </div>
             </div>
             <div className="body-Card">
                <div className="infor-pos">
                    <div className="infor">
                      i
                    </div>
                </div>
                 <div className="body-Card-des">
                    <div className="circul-h">
                        <div className="barra"></div>
                    </div>
                    <div className="Card-des">
                        <div className="title-2">info...</div>
                        <div className="descri">
                            <span className="descriTxt"></span>
                            <hr className="linea"/>
                            <span className="descriTxt"></span>
                            <hr className="linea"/>
                            <span className="descriTxt"></span>
                            <hr className="linea"/>
                        </div>
                    </div>
                 </div>
                <div className="pos-punto-h">
                   <div className="puntos-h"></div>
                </div>
             </div>
         </div>
       );
   }
}

export default Card;