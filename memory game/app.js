document.addEventListener('DOMContentLoaded',() => {
    //card options
    const CARDARRAY = [
        {
            name:'fries',
            img: 'images/photo1.jpg'
        },
        {
            name:'fries',
            img: 'images/photo1.jpg'
        },
        {
            name:'pizza',
            img: 'images/photo2.jpg'
        },
        {
            name:'pizza',
            img: 'images/photo2.jpg'
        },
        {
            name:'hotdog',
            img: 'images/photo3.jpg'
        },
        {
            name:'hotdog',
            img: 'images/photo3.jpg'
        },
        {
            name:'ice-cream',
            img: 'images/photo4.jpg'
        },
        {
            name:'ice-cream',
            img: 'images/photo4.jpg'
        },
        {
            name:'milkshalk',
            img: 'images/photo5.jpg'
        },
        {
            name:'milkshalk',
            img: 'images/photo5.jpg'
        },
        {
            name:'extra-icon',
            img: 'images/image1.jpg'
        },
        {
            name:'extra-icon',
            img: 'images/image1.jpg'
        }
    ]
    CARDARRAY.sort(()=> 0.5 - Math.random())

    const GRID = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId =[]
    var cardsWon = []
    //game board
    function createBoard(){
        for(let i = 0; i < CARDARRAY.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            GRID.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert("you found a match")
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardsWon.push('cardsChosen')
        }else{
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            alert("sorry, try again")
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === CARDARRAY.length/2){
            resultDisplay.textContent = 'Congulaturation'
        }
    }

    //flip your card
     function flipcard(){
         var cardId = this.getAttribute('data-id')
         cardsChosen.push(CARDARRAY[cardId].name)
         cardsChosenId.push(cardId)
         this.setAttribute('src',CARDARRAY[cardId].img)
         if(cardsChosen.length === 2){
             setTimeout(checkForMatch, 500)
         }
     }
     createBoard()
})