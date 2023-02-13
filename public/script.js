  let menu=document.querySelector('#menu-icon');
  let navbar=document.querySelector('.navbar');
  menu.onClick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  }
