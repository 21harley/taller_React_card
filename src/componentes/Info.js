import React from 'react';
import axios from 'axios';

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={datos:[]}
     }
     componentDidMount(){
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
            <img className="fondo-img" src="https://i.pinimg.com/originals/e9/7c/c3/e97cc329984a848cab048cad41cea08e.jpg"/>
            <div className="fondo-title-pos">
                <h1 className="fondo-title">Info</h1>
           </div>
        </div>
       );
   }
}

export default Info;