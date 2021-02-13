
export default function  modal(params,lis) {
    const inf=document.querySelector(".conten-panel-table");
    const app=document.querySelector(".app");
    const title=document.querySelector(".title-modal");
    const img=document.querySelector(".modal-img");
    const link=document.querySelector(".masInforma");

    if(params===0){
        inf.style.opacity="0";
        inf.style.visibility="hidden";
        inf.style.pointerEvents="none";
        app.style.opacity="1";
        app.style.pointerEvents="visible";
    }else{
        inf.style.opacity="1";
        inf.style.visibility="visible";
        app.style.opacity="0.1";
        app.style.pointerEvents="none";
    }
    if(lis!==null){
        title.innerHTML=lis[0];
        img.setAttribute("src", lis[1]);
        let aux=lis[0].replace(" ","_");
        link.setAttribute("href","https://rickandmorty.fandom.com/wiki/"+aux);
    }
}