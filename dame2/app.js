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
   
//creating1 vertical routes
let kingRow = []
let rowLeng = 110
let kingRow2 = []
let rowLeng2 = 100
let kingRow3 = []
let rowLeng3 = 108
let kingRow4 = []
let rowLeng4 = 89
for(let i = 0 ; i<= 80 ;i+=20)
{
let row = [] 
rowLeng -=2
    for(let j = i; j <= rowLeng; j+=11){
        row.push(j)
    }
    kingRow.push(row.toString())
}

//creating2 vertical routes
for(let i = 2 ; i<= 8 ;i+=2)
{
let row2 = [] 
rowLeng2 -=20
    for(let j = i; j <= rowLeng2; j+=11){
        row2.push(j)
    }
    kingRow2.push(row2.toString())
}

//creating3 vertical routes
for(let i = 8 ; i>= 2 ;i-=2)
{
let row3 = [] 
rowLeng3 -=20
    for(let j = i; j <= rowLeng3; j+=9){
        row3.push(j)
    }
    kingRow3.push(row3.toString())
}

//creating4 vertical routes
for(let i = 19 ; i<= 79 ;i+=10)
{
let row4 = [] 
rowLeng4 +=2
    for(let j = i; j <= rowLeng4; j+=9){
        row4.push(j)
    }
    kingRow4.push(row4.toString())
}
let allRows = kingRow.concat(kingRow2,kingRow2,kingRow3,kingRow4)
let routeString = allRows.toString()

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
                        if( winPointId_1 == "play-block player-two-block" || winPointId_1 == "play-block player-two-king")
                        {
                            winPoint1.classList.remove('player-two-block') 
                            winPoint1.classList.remove('player-two-king') 
                            document.getElementById(prevId).classList.remove("player-one-block")
                            className.classList.add("player-one-block")
                        }
                        if( winPointId_2 == "play-block player-two-block" ||  winPointId_2 == "play-block player-two-king")
                        {
                            winPoint2.classList.remove('player-two-block')
                            winPoint2.classList.remove('player-two-king')
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
                        if( winPointId_1 == "play-block player-one-block" || winPointId_1 == "play-block player-one-king")
                        {
                            winPoint1.classList.remove('player-one-block') 
                            winPoint1.classList.remove('player-one-king')
                            document.getElementById(prevId).classList.remove("player-two-block")
                            className.classList.add("player-two-block")
                        }
                        if( winPointId_2 == "play-block player-one-block" || winPointId_2 == "play-block player-one-king")
                        {
                            winPoint2.classList.remove('player-one-block')
                            winPoint2.classList.remove('player-one-king')
                            document.getElementById(prevId).classList.remove("player-two-block")
                            className.classList.add("player-two-block")
                        }
                    }
                }

                //selected block position
                selValue.push(block_id)
                //played route
                let myRoute1 = []
                let myRoute2 = []

                
                //players forward played dame route(coordinates)
                if(prevPosValue < block_id)
                {
                    let identifier = block_id - prevPosValue
                    //left route
                    if( identifier%9 == 0)
                    {
                        for(let i = prevPosValue ;i <= block_id;i+=9){
                            myRoute1.push(i)
                        }
                    }
               
                    //right route
                    if(identifier%11 == 0)
                        {
                            for(let i = prevPosValue ;i <= block_id;i+=11){
                                myRoute2.push(i)
                            }
                        }   
                    }
               
                    //players backward played dame route(coordinates) 
                    if(prevPosValue > block_id)
                    {
                    let identifier = prevPosValue - block_id 
               
                    //left route
                    if( identifier%9 == 0)
                    {
                        for(let i = block_id ;i <= prevPosValue;i+=9){
                            myRoute1.push(i)
                        }
                    }
               
                    //right route
                    if(identifier%11 == 0)
                    {
                        for(let i = block_id ;i <= prevPosValue;i+=11){
                            myRoute2.push(i)
                        }
                    }   
                }

                //checking whether you are getting point attempt is right
                let route1 = myRoute1.toString().length
                let route2 = myRoute2.toString().length
                let validPoint = []
                function possibleWinIds(coordinate){
                    //getting the ids of possible wins
                    let pointId1 = "#b"+coordinate.toString()
                    //adding the more zero for first 5 play blocks
                    if(coordinate < 10)
                    {
                        pointId1 = '#b0'+coordinate.toString()
                    }
                    let winPoint1 = document.querySelector(pointId1) 
                    let winPointId_1 = winPoint1.classList.value 
                    if(winPointId_1 != 'play-block')
                    {
                        validPoint.push(pointId1)
                    }
                }
                //check the color of second select

                //player 1 dame push forward and scoring
                if( currClass == "play-block" && prevClassValue == "play-block player-one-king")
                {   
                    if((routeString.indexOf(route1) && route1!= 0) || (routeString.indexOf(route2) && route2!= 0))
                    {
                        myRoute2.forEach(coordinate => {
                            return possibleWinIds(coordinate);
                        });

                        myRoute1.forEach(coordinate => {
                            return possibleWinIds(coordinate);
                        });

                        //denying or giving a point
                        if(validPoint.length == 2)
                        {
                            let winPoint2 = validPoint[0]
                            let winPoint_2 = document.querySelector(winPoint2)
                            let winPoint1 = validPoint[1]
                            let winPoint_1 = document.querySelector(winPoint1)

                            //forward points collector
                            winPoint_1.classList.remove('player-two-king') 
                            winPoint_1.classList.remove('player-two-block')

                            //backwrd points collector
                            winPoint_2.classList.remove('player-two-king') 
                            winPoint_2.classList.remove('player-two-block')
                            //move backward & forward move
                            document.getElementById(prevId).classList.remove("player-one-king")
                            className.classList.add("player-one-king")
                            
                        }
                        
                        if(validPoint.length == 1)
                        {
                            document.getElementById(prevId).classList.remove("player-one-king")
                            className.classList.add("player-one-king")
                        }

                    }
                }

                //player 2 push dame forward and scoring
                if( currClass == "play-block" && prevClassValue == "play-block player-two-king")
                {
                    if((routeString.indexOf(route1) && route1!= 0) || (routeString.indexOf(route2) && route2!= 0))
                    {
                        myRoute2.forEach(coordinate => {
                            return possibleWinIds(coordinate);
                        });

                        myRoute1.forEach(coordinate => {
                            return possibleWinIds(coordinate);
                        });

                        //denying or giving a point
                        if(validPoint.length == 2)
                        {
                            let winPoint2 = validPoint[0]
                            let winPoint_2 = document.querySelector(winPoint2)
                            let winPoint1 = validPoint[1]
                            let winPoint_1 = document.querySelector(winPoint1)

                            //forward points collector
                            winPoint_1.classList.remove('player-one-king') 
                            winPoint_1.classList.remove('player-one-block')
                            //backward points collector
                            winPoint_2.classList.remove('player-one-king') 
                            winPoint_2.classList.remove('player-one-block')
                            //move backward & forward move
                            document.getElementById(prevId).classList.remove("player-two-king")
                            className.classList.add("player-two-king")
                        }
                        
                        if(validPoint.length == 1)
                        {
                            document.getElementById(prevId).classList.remove("player-two-king")
                            className.classList.add("player-two-king")
                        }
                    }
                }

                //getting the dame on right time
                //player one dame cloning position
                damePositions2 = [0,2,4,6,8]
                //player one dame cloning position
                damePositions1 = [91,93,95,97,99]
                if(className.classList.value == "play-block player-one-block" && damePositions1.some(pos => pos == bId))
                {
                    className.classList.add("player-one-king")
                    className.classList.remove("player-one-block")
                }
                if(className.classList.value == "play-block player-two-block" && damePositions2.some(pos => pos == bId))
                {
                    className.classList.add("player-two-king")
                    className.classList.remove("player-two-block")
                }
                console.log(className.classList.value)
                console.log(className.id)
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