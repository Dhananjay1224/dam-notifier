const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

function checkLevel(input){
  const num = input.value;
  if(num >= 0 && num <20){
    document.getElementById("square").style.background = "blue";
  }
  else if(num >= 20 && num < 30){
    document.getElementById("square").style.background = "green";
  } else if(num >= 30 && num < 40){
    document.getElementById("square").style.background = "yellow";
  } else{
    document.getElementById("square").style.background = "red";
    let snd = new Audio('alarm.mp3');
    snd.play();
  }
}

btn.addEventListener('click',function inputValues (){
  checkLevel(input);
})