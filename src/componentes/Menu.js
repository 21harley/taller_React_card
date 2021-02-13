import React from 'react';
import {Link} from "react-router-dom";
import MenuHam from './MenuHam';

class Menu extends React.Component{
  componentDidMount(){
    this.interval=setInterval(() => {
        if(650<window.innerWidth){
            MenuHam(0);
        }
    }, 1000);
  }
  componentWillUnmount(){
        clearInterval(this.interval);
  }
  onClickEvent(e){
   if(651>window.innerWidth){
      if(e.target.matches(".link")){
          MenuHam(1);
      }else if(e.target.matches(".logo-nav")){
          MenuHam(0);
      }
   }
  }
   render(){

       return(
           <nav className="menu-nav">
               <div className="pos-nav">
                    <div className="logo-nav" onClick={this.onClickEvent}>
                        <img className="logo-img-nav" alt="Menu" src="https://www.logolynx.com/images/logolynx/1b/1b8f07176d1ff1f7b9128b2b44bab24f.png"/>
                    </div>
                    <ul className="menu-nav-item" onClick={this.onClickEvent}>
                        <li id="m-items-1" className="menu-items activeMenu" > <Link className="link" to="/" >🛸Home</Link> </li>
                        <li id="m-items-2" className="menu-items" > <Link className="link" to="/Card" >👽Card</Link> </li>
                        <li id="m-items-3" className="menu-items" > <Link className="link" to="/Contacto" >🌌Contacto</Link> </li>
                        <li id="m-items-4" className="menu-items" > <Link className="link" to="/Info" >🐙Info</Link> </li>
                    </ul>
               </div>
           </nav>
       );
   }
}

export default Menu;