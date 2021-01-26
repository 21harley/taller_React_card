import React from 'react';
import '../styles/App.css';
import Card from './Card.js';
import axios from 'axios';

class App extends React.Component{
   constructor(props){
      super(props)
      this.consultaApiAxios()
      this.state={datos:[]}
   }
   
   consultaApi(){
      fetch("https://rickandmortyapi.com/api/character")
       .then((res)=>{
          return res.json()
       })
       .then((api)=>{
          console.log(api.results)
          this.setState({datos:api.results})
       })
   }
   consultaApiAxios(){
      axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
         console.log(res);
        this.setState({datos:res.data.results});
      })
   }
   render(){
       return(
         <div className="app">
           {
              this.state.datos.map((texto, index) => (
                 <Card 
                    titulo1={texto.name}
                    numero=
                    {texto.id<=9
                     ?"0"+texto.id
                     :texto.id               
                    }
                    ruta={texto.image}
                    titulo2={texto.species}
                    des={texto.status}
                    des1={texto.gender}
                    des2={texto.origin.name}
                 />
              ))
           }
         </div>
       );
   }
}

export default App;