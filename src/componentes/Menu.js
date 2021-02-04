import React from 'react';
import {Link} from "react-router-dom";
class Menu extends React.Component{
    
    menuShow(e) {
     if(e.target.matches(".link")){
        const cam=document.querySelector(".menu-items.activeMenu");
        cam.classList.remove("activeMenu");
        const father=e.target.parentElement;
        father.classList.add("activeMenu");
        e.preventDefault();
     }
    }

   render(){
       return(
           <nav className="menu-nav">
               <div className="pos-nav">
                    <div className="logo-nav">
                        <img className="logo-img-nav" src="https://www.logolynx.com/images/logolynx/1b/1b8f07176d1ff1f7b9128b2b44bab24f.png"/>
                    </div>
                    <ul className="menu-nav-item" onClick={this.menuShow}>
                        <li  className="menu-items activeMenu" > <Link className="link" to="/" >Home</Link> </li>
                        <li  className="menu-items" > <Link className="link" to="/Card" >Card</Link> </li>
                        <li  className="menu-items" > <Link className="link" to="/Contacto" >Contacto</Link> </li>
                        <li  className="menu-items" > <Link className="link" to="/Info" >Info</Link> </li>
                    </ul>
               </div>
           </nav>
       );
   }
}

export default Menu;