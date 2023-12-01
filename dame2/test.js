const PLAYBOARD = document.getElementById("play-board");
//player identifier
let playerIdentifier = 0;

//playing system
let selValue = []
let prevValue = []
let previousSelect = []
let previousSelectId = []

//creating a game board
for(let i = 0 ; i<10;i++){

    //create a row
    var column = document.createElement("div");
        column.setAttribute('class','play-column');

    //create single block
    for(let j = 0; j<10;j++){
        var block = document.createElement("div");
        block.setAttribute('class','play-block');
        block.setAttribute('id',"b"+`${i}`+`${j}`);
        column.appendChild(block);
        PLAYBOARD.appendChild(column);
    }
}
 

//creating the game players cards
const PLAYBLOCK = document.querySelectorAll(".play-column:nth-child(even) div:nth-child(even),.play-column:nth-child(odd) div:nth-child(odd)")

PLAYBLOCK.forEach(className => {
        let bId = className.id
        bId = bId.slice(1,3)
        className.innerText = bId
        let block_id = Number(bId)
        

        className.onclick = () => { 
            playerIdentifier += 1;
            let prevSel = previousSelect.length
            prevSel -=1
            if( playerIdentifier%2 == 0){

                
                document.getElementById(prevId).classList.remove("clicked-block")
            }
            else
            {
                //selected block Identifiers
                previousSelect.push(className.classList.value)
                previousSelectId.push(className.id)
                prevValue.push(block_id)
                className.classList.add("clicked-block")
                // setTimeout(() => className.classList.remove("clicked-block"),1000)
            }
        }           
    }
)
