const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var close_button = document.querySelector(".close-button");
var social_buttons = document.querySelectorAll(".social");

close_button.addEventListener('click',()=>{
   social_buttons.forEach(function(buttons){
       buttons.classList.toggle('hide');
   });
});

function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.pro');
  let l = document.getElementsByTagName('h5');
  for(var i = 0;i<=l.length;i++){
  let a=item[i].getElementsByTagName('h5')[0];
  let value=a.innerHTML || a.innerText || a.textContent;
  if(value.toUpperCase().indexOf(filter) > -1) {
  item[i].style.display="";
  }
  else
  {
  item[i].style.display="none";
  }
  }
  }
