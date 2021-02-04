import React from 'react';

class Home extends React.Component{

   render(){
       return(
       <div className="fondo">
            <img className="fondo-img" src="https://www.xtrafondos.com/wallpapers/rick-y-morty-en-el-espacio-6046.jpg"/>
            <div className="fondo-title-pos">
               <h1 className="fondo-title">Hello</h1>
            </div>
            <div className="fondo-img2-pos">
               <img className="fondo-img2" src="https://www.xtrafondos.com/wallpapers/rick-y-morty-en-el-espacio-6046.jpg"/>
            </div>
       </div>
       );
   }
}

export default Home;