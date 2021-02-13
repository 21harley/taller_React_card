import React from 'react';
import axios from 'axios';
import menuShow from './menuShow';
import Page from './Page';

class Contacto extends React.Component{
   constructor(props){
      super(props)
      this.state={datos:[]}
      this.page=1;
   }
   generador(numero,page1){
     let res='';
     switch(numero){
        case 1:
           res='1,2,3,4,5,6';
           this.page=1;
           break;
        case 2:
           if(page1===1&&this.page<=111){
               this.page+=page1;
           }
           if(page1===-1&&this.page>1){
               this.page+=page1; 
           }
           for (let aux=this.page*6-6; aux < this.page*6+1; aux++) {
             if(aux < this.page*6){
               res+=aux+',';
             }else{
               res+=aux;
             }
           }
        break;
        case 3:
           this.page=111;
           res='666,667,668,669,670,671';
        ;break;
     }
     return res;
   }
   consultaApiAxios(carga){
      console.log(carga);
      if(carga==='') return;
      axios.get(`https://rickandmortyapi.com/api/character/`+carga)
      .then(res => {
        this.setState({datos:res.data.results});
        Page(res.data);
      })
   }
   
   componentDidMount(){
      menuShow(document,3);
      this.consultaApiAxios(this.generador(1,0));
   }

   onClickEvent(numero,page){
      this.consultaApiAxios(this.generador(numero,page));
   }

   render(){
       return(
        <div className="fondo">
           <img className="fondo-img" alt="Contacto" src="https://i.pinimg.com/originals/a7/6c/73/a76c73311536c14e118c28e85d9ddada.jpg"/>
           <div className="fondo-title-pos-contacto">
                <a className="fondo-title" target="_blank" rel="noreferrer" href="https://github.com/21harley">Contacto</a>
           </div>
           <div className="container-img">
                <div className="img-person">
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                   <div className="img-person-pos">
                     <img className="img-person-show" alt="imgPerson" src="https://www.vodafone.es/c/statics/imagen/img_resp_video_Rick_y_Morty_T4_V2.jpg?v=20200522012715"></img>
                     <span className="img-person-des">hola</span>
                   </div>
                </div>
                <div className="img-menu">
                  <div className="img-one">
                     <div className="button-one" onClick={()=>this.onClickEvent(1,0)}>
                     ⏪
                     </div>
                  </div>
                  <div className="img-prev">
                     <div className="button-prev" onClick={()=>this.onClickEvent(2,-1)}>
                     ◀️
                     </div>                    
                  </div>
                  <div className="img-next">
                     <div className="button-next" onClick={()=>this.onClickEvent(2,1)}>
                     ▶️
                     </div>  
                  </div>
                  <div className="img-over">
                     <div className="button-over" onClick={()=>this.onClickEvent(3,0)}>
                     ⏩
                     </div>  
                  </div>
                </div>
           </div>
        </div>
       );
   }
}

export default Contacto;