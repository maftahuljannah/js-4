let  inc = document.querySelector('.inc')
let  dec = document.querySelector('.dec')
let  input = document.querySelector('.input')
let cart = document.querySelector('.cart')
let Name = prompt("enter your username: (mili)");
let pass = prompt("Enter your password: (2200)");


if (Name === "mili") {
   if (pass === "2200") {
console.log("welcome to our page");
   }else{
      console.log("Invalied password");
   }
   
}else{
   console.log("Acess Denied");
}


inc.addEventListener('click' , function(){
   if((Number(input.value) + 1)  < 6){
      input.value = Number(input.value) + 1;
   }else{
    inc.style.cursor = "not-allowed" ;
   }
   if(Number(input.value) > 1){
      dec.style.cursor = "pointer";
   }
});

dec.addEventListener('click' , function(){
   if(Number(input.value) > 1){
      input.value = Number(input.value) - 1
      inc.style.cursor = "pointer";

   }else{
      dec.style.cursor = "not-allowed";
   }

});

cart.addEventListener('click' , function(){
   alert('Go to the cart')
   
})

let btn = document.querySelector('.btn');
let bgClr = document.querySelector('#clr');

btn.addEventListener('click' ,()=>{

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

  bgClr.style.background = `rgb(${red}, ${green}, ${blue})`;
})

let title = document.querySelector('.title');
let progress = document.querySelector('.progress');

progress.addEventListener('input' , function(){
let progressValue = Number(progress.value);

title.innerHTML = progressValue;
})

