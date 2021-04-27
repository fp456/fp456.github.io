function toggleTheme(){
    let bodyelement =  document.querySelector("body")
    bodyelement.classList.toggle("dark-mode")

}

let button = document.getElementById("sun");
button.onclick = toggleTheme;



function showdescription(name) {
    let x = document.getElementById(name);
    
      x.style.display = "block";
    
}


let y = document.querySelector(".mainbackground");
let z = document.querySelector(".notes");
let w = document.querySelector(".ticket");
let t = document.querySelector(".book");
let v = document.querySelector(".phone");



function selected(){

  y.classList.add("invisible");
  z.classList.add("invisible");
  w.classList.add("invisible");
  t.classList.add("invisible");


  showdescription("desphone");
}


function hidedescription(name) {
  let x = document.getElementById(name);
  
    x.style.display = "none";
  
}


function notselected(){
  y.classList.remove("invisible");
  z.classList.remove("invisible");
  w.classList.remove("invisible");
  t.classList.remove("invisible");

  hidedescription("desphone");
}

document.querySelector(".phone").onmouseover = selected;
document.querySelector(".phone").onmouseout = notselected;

function selectednotes(){

  y.classList.add("invisible");
  v.classList.add("invisible");
  w.classList.add("invisible");
  t.classList.add("invisible");


  showdescription("desnotes");
}

function notselectednotes(){
  y.classList.remove("invisible");
  v.classList.remove("invisible");
  w.classList.remove("invisible");
  t.classList.remove("invisible");

  hidedescription("desnotes");
}

document.querySelector(".notes").onmouseover = selectednotes;
document.querySelector(".notes").onmouseout = notselectednotes;

function selecteticket(){

  y.classList.add("invisible");
  v.classList.add("invisible");
  z.classList.add("invisible");
  t.classList.add("invisible");


  showdescription("desticket");
}

function notselectedticket(){
  y.classList.remove("invisible");
  v.classList.remove("invisible");
  z.classList.remove("invisible");
  t.classList.remove("invisible");

  hidedescription("desticket");
}

document.querySelector(".ticket").onmouseover = selecteticket;
document.querySelector(".ticket").onmouseout = notselectedticket;

function selectebook(){

  y.classList.add("invisible");
  v.classList.add("invisible");
  z.classList.add("invisible");
  w.classList.add("invisible");

}

function notselectedbook(){
  y.classList.remove("invisible");
  v.classList.remove("invisible");
  z.classList.remove("invisible");
  w.classList.remove("invisible");

}

document.querySelector(".book").onmouseover = selectebook;
document.querySelector(".book").onmouseout = notselectedbook;

window.onload = function()
{document.body.scrollTop = document.documentElement.scrollTop = 0;
};
