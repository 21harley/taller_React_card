import React from 'react';
import menuShow from './menuShow';

class Home extends React.Component{
   componentDidMount(){
      menuShow(document,1);
      this.interval=setInterval(() => {
         let ruta=[
            "https://pa1.narvii.com/6442/e1d3dd1be5cadf146de27db6d2fe84dd59eaee58_hq.gif",
            "https://i.gifer.com/Z4aV.gif",
            "https://cdnb.artstation.com/p/assets/images/images/020/740/709/original/win-dolores-ricknmorty-gif.gif?1568981763&dl=1",
            "https://i.makeagif.com/media/11-19-2015/N2P_p_.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/936063602356639140/E3FF52836D2CF78B3714B6B649C7045A8547305F/",
            "https://cdn.statically.io/img/steamuserimages-a.akamaihd.net/ugc/782978849731816179/3C57274A35C1718A482502A104E3D6ABC4568EEA/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            "https://thumbs.gfycat.com/FluffyAgitatedKoi-size_restricted.gif",
            "http://i.imgur.com/HZC6pmi.gif",
            "https://i.makeagif.com/media/8-21-2017/xEyDXH.gif",
            "https://thumbs.gfycat.com/TatteredHilariousAustraliankelpie-size_restricted.gif",
            "http://i0.kym-cdn.com/photos/images/newsfeed/001/080/688/b30.gif",
            "https://i.pinimg.com/originals/fa/38/46/fa384689a5d6840163edc0dc61a854a9.gif",
            "https://media.giphy.com/media/OdiEoqHqXUm52/giphy.gif",
            "https://media.tenor.com/images/e9e060b3eed685391ed181b19274f6d9/tenor.gif",
            "https://i.pinimg.com/originals/1f/1b/24/1f1b245770da6a186a359dd0c38bac2b.gif",
            "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2017/01/rick-morty-8-bit.gif",
            "https://i.pinimg.com/originals/0d/b5/c7/0db5c7603457218efa4b24840ffdc861.gif",
            "https://media3.giphy.com/media/SVaLSBSWB0zTjkp7md/200.gif",
            "https://media1.tenor.com/images/ed910f3cf0d213ed643e2073a248ec37/tenor.gif?itemid=9426987",
            "https://i.pinimg.com/originals/05/fb/74/05fb740f9916f107e8003e228e866816.gif",
            "http://pa1.narvii.com/6578/9fdfcc4c839fd7f032a5a8e0d8378e0ebf77f727_00.gif",
            "https://thumbs.gfycat.com/SnoopyFoolhardyCoot-size_restricted.gif",
            "https://media3.giphy.com/media/RH1IFq2GT0Oau8NRWX/giphy.gif",
            "https://giffiles.alphacoders.com/118/118769.gif",
            "https://thumbs.gfycat.com/FragrantMisguidedFairyfly-small.gif",
            "https://i.makeagif.com/media/9-21-2017/qUiC_4.gif",
            "https://i.gifer.com/8BMq.gif",
            "https://cafetoons.net/wp-content/uploads/2019/11/a9529298e561cfd5d521f3acb4cb215a.gif"
         ];
         let aux=parseInt(Math.random() * (ruta.length - 1) + 1);
         let rutaT=ruta[aux];
         document.querySelector(".fondo-img2").setAttribute("src",rutaT);
      }, 3000);
   }
   componentWillUnmount(){
         clearInterval(this.interval);
   }
   render(){
       return(
       <div className="fondo">
            <img className="fondo-img" alt="Fondo" src="https://www.xtrafondos.com/wallpapers/rick-y-morty-en-el-espacio-6046.jpg"/>
            <div className="fondo-title-pos">
               <h1 className="fondo-title">hello</h1>
            </div>
            <div className="fondo-img2-pos">
               <img className="fondo-img2" alt="Fondo" src="https://cafetoons.net/wp-content/uploads/2019/11/a9529298e561cfd5d521f3acb4cb215a.gif"/>
            </div>
       </div>
       );
   }

}

export default Home;