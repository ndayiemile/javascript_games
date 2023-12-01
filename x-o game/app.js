const gridItems = document.querySelectorAll('.grid-item')

//player Identifier
var player = [0]
var theWinner ='';
//win queries
var winQueries = [
    //diagonal wins
    [9,5,1],
    [7,5,3],

    //vertical wins
    [7,4,1],
    [8,5,2],
    [9,6,3],
    
    //horizontal wins
    [3,2,1],
    [6,5,4],
    [9,8,7]
]

function winCheck(winBlock) {
	var winBlock_2 ='[' +["o","o","o"].toString()+']';
	var winBlock_1 ='[' +["x","x","x"].toString()+']';
	var y ='['+winBlock.toString()+']';

  	return y === winBlock_1 || y === winBlock_2;
}

function winConfirm() {
  var win =  winQueries.some(winCheck);
  if(win){
  	document.getElementById("demo").style.color = "green"
  	document.getElementById("demo").style.backgroundColor = "red"
    document.getElementById("winner").style.display = "block"
    document.getElementById("winner").innerHTML = "the WINNER is"+" "+theWinner

    setTimeout(endGame,3000)
  }
}

function endGame(){
    gridItems.forEach( className => className.style.display = "none")
    document.getElementById("winner").style.left = "33%"
    document.getElementById("winner").innerHTML = "GAME OVER"
}

//play progress holder
var playerProgress_1 = []
var playerProgress_2 = []

    
// adding an eventlistener to all grid-item classes
gridItems.forEach( className =>
className.addEventListener('click', () => {
    player[0] +=1;
    if(player%2 == 0){
        //probable winner
        theWinner = "player2"

        //identifier color
        className.style.backgroundColor = 'indianred'
        var playedId = className.id
        // player1 icon
        playerProgress_1.push(playedId)

        className.textContent ="x"

        // disable re-responde to the click event
        className.style.pointerEvents = 'none'

        //saving the id
        for( let i = 0; i < winQueries.length; i++){
            for(let j = 0; j < winQueries[i].length;j++){
                if( winQueries[i][j] == playedId){
                    winQueries[i][j] = "x"
                }
            }
        }
        winConfirm();
    }else{

         //probable winner
         theWinner = "player1"


        var playedId = className.id  

        //player2 icon
        playerProgress_2.push(playedId)

        className.textContent ="0"

        // disable re-responde to the click event
        className.style.pointerEvents = 'none '

        //saving the id
        for( let i = 0; i < winQueries.length; i++){
            for(let j = 0; j < winQueries[i].length;j++){
                if( winQueries[i][j] == playedId){
                    winQueries[i][j] = "o"
                }
            }
        }
        winConfirm();
    }
    
}))