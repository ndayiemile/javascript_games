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
    if(i%2 == 0){
        column.setAttribute('class','play-column');
    }else{
        column.setAttribute('class','play-column');
    }

    //create single block
    for(let j = 0; j<10;j++){
        var block = document.createElement("div");
        if(i%2 == j%2 && i%2 == 0){
            block.setAttribute('class','play-block');
        }else{
            block.setAttribute('class','play-block');
        }
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
        let block_id = Number(bId)
        if(block_id <40){
            className.classList.add("player-one-block");
        }
        if(block_id >59){
            className.classList.add("player-two-block");
        }

        className.onclick = () => { 
            playerIdentifier += 1;
            let prevSel = previousSelect.length
            prevSel -=1
            if( playerIdentifier%2 == 0){

                //selected block position
                selValue.push(block_id)

                //game engine variables
                let prevPosValue = prevValue[prevSel]
                let prevId = previousSelectId[prevSel]
                let prevClassValue = previousSelect[prevSel]
                let currClass = className.classList.value
                //check the color of second select

                //player 1 forward push and scoring
                if( currClass == "play-block" && prevClassValue == "play-block player-one-block" )
                {
                    let validPos = [block_id-9,block_id-11]
                    let validWin = [block_id-18,block_id-22]
                    
                    //forward push
                    if(validPos.some( pos => pos == prevPosValue))
                    {
                        document.getElementById(prevId).classList.remove("player-one-block")
                        className.classList.add("player-one-block")
                    }
                    if( validWin.some(Win => Win == prevPosValue))
                    {
                        let pointId1 = "#b"+(prevPosValue+9).toString()
                        let pointId2 = "#b"+(prevPosValue+11).toString()
                        let winPoint1 = document.querySelector(pointId1)
                        let winPointId_1 = winPoint1.classList.value 
                        let winPoint2 = document.querySelector(pointId2)
                        let winPointId_2 = winPoint2.classList.value 
                        if( winPointId_1 == "play-block player-two-block" )
                        {
                            winPoint1.classList.remove('player-two-block') 
                            document.getElementById(prevId).classList.remove("player-one-block")
                            className.classList.add("player-one-block")
                        }
                        if( winPointId_2 == "play-block player-two-block" )
                        {
                            winPoint2.classList.remove('player-two-block')
                            document.getElementById(prevId).classList.remove("player-one-block")
                            className.classList.add("player-one-block")
                        }
                    }
                }
                if( currClass == "play-block" && prevClassValue == "play-block player-two-block" )
                {
                    let validPos = [block_id+9,block_id+11]
                    let validWin = [block_id+18,block_id+22]
                    if(validPos.some( pos => pos == prevPosValue))
                    {
                        document.getElementById(prevId).classList.remove("player-two-block")
                        className.classList.add("player-two-block")
                    }

                    if( validWin.some(Win => Win == prevPosValue))
                    {
                        let pointId1 = "#b"+(prevPosValue-9).toString()
                        let pointId2 = "#b"+(prevPosValue-11).toString()
                        let winPoint1 = document.querySelector(pointId1)
                        let winPointId_1 = winPoint1.classList.value 
                        let winPoint2 = document.querySelector(pointId2)
                        let winPointId_2 = winPoint2.classList.value 
                        if( winPointId_1 == "play-block player-one-block" )
                        {
                            winPoint1.classList.remove('player-one-block') 
                            document.getElementById(prevId).classList.remove("player-two-block")
                            className.classList.add("player-two-block")
                        }
                        if( winPointId_2 == "play-block player-one-block" )
                        {
                            winPoint2.classList.remove('player-one-block')
                            document.getElementById(prevId).classList.remove("player-two-block")
                            className.classList.add("player-two-block")
                        }
                    }
                }

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


