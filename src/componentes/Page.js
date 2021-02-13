const d=document;

export default function Page(params) {
  const conten=d.querySelectorAll(".img-person-show");
  const name=d.querySelectorAll(".img-person-des");
  for(let i=0;i<conten.length;i++){
      conten[i].setAttribute("src",params[i].image);
      conten[i].setAttribute("title",params[i].name);
      name[i].innerHTML=params[i].name;
  }
}