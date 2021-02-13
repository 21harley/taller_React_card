import React from 'react';
import axios from 'axios';
import menuShow from './menuShow';

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={datos:[]}
     }
     componentDidMount(){
      menuShow(document,4);
      this.consultaApiAxios()   
    }

    consultaApiAxios(){
      axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        this.setState({datos:res.data.results});
      })
    }

   render(){
       return(
        <div className="fondo">
            <img className="fondo-img" alt="Infor" src="https://i.pinimg.com/originals/e9/7c/c3/e97cc329984a848cab048cad41cea08e.jpg"/>
            <div className="fondo-title-pos">
                <a className="fondo-title" target="_blank" rel="noreferrer" href="https://rickandmorty.fandom.com/wiki/Rickipedia">Info</a>
           </div>
        </div>
       );
   }
}

export default Info;