export default function  MenuHam(params) {
    const menu=document.querySelector(".menu-nav-item");
    if(params===1){
        menu.style.opacity="0";
        menu.style.visibility="hidden";
    }else{
        menu.style.opacity="0.9";
        menu.style.visibility="visible";
    }
 
}