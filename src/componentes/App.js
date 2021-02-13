import React from 'react';
import Card from './Card.js';
import axios from 'axios';
import menuShow from './menuShow';
import searchFilters from "./filtro_busqueda.js";
import modal from './Modal';

class App extends React.Component{
   constructor(props){
      super(props)
      this.state={datos:[]}
   }

   componentDidMount(){
      menuShow(document,2);
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
        console.log(res);
      })
   }
   onClickEvent(){
      modal(0,null);
  }
   render(){
      const {datos}=this.state;
      searchFilters(".filter",".Card");
       return(
         <div className="app-pos">
            <div className="pos-filter">
               <div className="pos-filter-w">
                  <div className="pos-buscar">
                     <div className="buscar"></div>
                   </div> 
                  <input type="text" className="filter" placeholder="Buscar"></input>
               </div>
            </div>
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
                       number={index}
                       ruta={texto.image}
                       titulo2={texto.species}
                       des={texto.status}
                       des1={texto.gender}
                       des2={texto.origin.name}
                    />
                 ))
              }
            </div>
            <div className="conten-panel-table">
               <div className="panel-table">
                  <div className="table-header">
                     <div className="title-modal">Titulo</div>
                        <div className="buttom-table">
                           <div href="/" className="exit" onClick={()=>this.onClickEvent()} >Exit</div>
                        </div>
                     </div>
                  <div className="table-return">
                     <div className="modal-pos">
                        <img className="modal-img" alt="img-modal" src="#"></img>
                     </div>
                     <a className="masInforma" href="/home" target="_blank">📚More information</a>
                  </div>
               </div>
            </div>
         </div>
       );
   }
}

export default App;