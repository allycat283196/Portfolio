/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

DOM: Document Object Model
    -structured representation of an HTML
    -the DOM is used to connect webpages to scripts like JavaScript
    -for each HTML box, there is an object in the DOM that we can 
    access & interact with

EVENTS: notifications that are sent to notify the code that something happened on the webpage;
    examples: clicking a button, resizing a window, scrolling down or pressing a key
    Event listener: a function that performs an action based on a certain event 
        It waits for a specific event to happen. 
*/


var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display ='block';
        diceDOM.src = './img/dice-' + dice +'.png';
        //3. Update the round score IF the rolled number wasn't 1
        if(dice !== 1) {
            roundScore += dice; 
            //Add score
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next player
            nextPlayer();
        }
    }//<!--end is gamePlaying = true -->
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //Add the CURRENT score to GLOBAL score
        scores[activePlayer]+=roundScore;
        
        //update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game 
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else {
        //next Player
        nextPlayer();
        }    
    }//<!---end is gamePlaying = true -->

});

function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; 

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}
/*-----------------------------------------GARBAGE--------------------------------------------------------------

setter
document.querySelector("#current-"+ activePlayer).innerHTML= '<em>'+ dice + '</em>';


var x = document.querySelector('#score-0').textContent;
getter
console.log(x);
*/