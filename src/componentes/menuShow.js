
export default function menuShow(d,params) {
    const cam=d.querySelector(".menu-items.activeMenu");
    cam.classList.remove("activeMenu");
        
    const father=d.querySelector("#m-items-"+params);
    father.classList.add("activeMenu"); 
}

