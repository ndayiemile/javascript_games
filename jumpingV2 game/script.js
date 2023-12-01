let character = document.getElementById("character");
let block1 = document.getElementById("b1");
let block2 = document.getElementById("b2");
let timer = document.getElementById("points");
var points = 0;

//alternative jump key
function jumpkey(event) {
    var x = event.which || event.keyCode;
    if( x == "32"){
        jump();
    }
  }

// scores counter and increasing the block spead over time
var pointsCounter = setInterval(() => {
    points +=1;
    if( points >= 100){
        block.style.animationDuration= "980ms"
    }
    if( points >= 200){
        block.style.animationDuration= "960ms"
    }
    if( points >= 300){
        block.style.animationDuration= "930ms"
    }
    timer.innerHTML = points;
}, 500);

//character jump function
function jump(){
    if(character.classList != "animate"){
        character.classList.add( "animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    },500)
}

//check the death state
var deathChecker = setInterval(() => {
    var charPosition =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var block1Position =parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    var block2Position =parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    if((block1Position<44 && block1Position>0) || (block2Position<44 && block2Position>0)){
        if(charPosition>= 150){
            block1.style.animation = "none"
            block1.style.display = "none"
            block2.style.animation = "none"
            block2.style.display = "none"
            
            character.style.display = "none"
            clearInterval(pointsCounter)
            alert("you lose")
        }
    }
}, 10);
