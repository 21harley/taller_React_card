import React from 'react';
import Card from './Card.js';
import axios from 'axios';

class App extends React.Component{
   constructor(props){
      super(props)
      this.state={datos:[]}
   }
   componentDidMount(){
      this.consultaApiAxios()
   }

   consultaApi(){
      fetch("https://rickandmortyapi.com/api/character")
       .then((res)=>{
          return res.json()
       })
       .then((api)=>{
          this.setState({datos:api.results})
       })
   }
   consultaApiAxios(){
      axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        this.setState({datos:res.data.results});
      })
   }
   render(){
      const {datos}=this.state;
       return(
         <div className="app-pos">
            <div className="app">
              {
                 datos.map((texto, index) => (
                    <Card key={texto.id}
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
         </div>
       );
   }
}

export default App;