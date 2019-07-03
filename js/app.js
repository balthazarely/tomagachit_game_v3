// Global Variables
let timer = 0;
let seconds = 0;
let watchIsRunning = false;


// The Game Object
const game = {
    tomagochiArray: [],
    createNewCharacture(){
        const newCharacture = new Tomagochi;
        newCharacture.greetings();
        // console.log(this, '<---this');
        this.tomagochiArray.push(newCharacture)
        console.log(newCharacture);
        console.log(this.tomagochiArray)  
    }   
}

// Gloabl Functions

// Functions to test conditions
function imBored() {
    if(game.tomagochiArray[0].boredom > 1) {
        // console.log('I am so bored, game over!');
    }
} 
function imSleepy() {
    if(game.tomagochiArray[0].sleepyness > 2) {
        // console.log('I am so tired, game over!');
    }
} 
function imHungry() {
    if(game.tomagochiArray[0].hunger > 3) {
        // console.log('I am so hungry, game over!');
    }
} 

// Functions to reduce stats 
function giveFood() {
    $('#hunger').click(function() {
         game.tomagochiArray[0].hunger = game.tomagochiArray[0].hunger -2;
})}

function giveEntertainment() {
    $('#bored').click(function() {
         game.tomagochiArray[0].boredom = game.tomagochiArray[0].boredom -2;
})}

function giveSleep() {
    $('#sleepyness').click(function() {
         game.tomagochiArray[0].sleepyness = game.tomagochiArray[0].sleepyness -2;
})}


//initializing the game
$('#Load').on('click', (e) => {
    console.log($(e.target));
    if(e.target.tagName === 'BUTTON') {
    $(e.currentTarget).hide();
    game.createNewCharacture();
}})

$('#Start').click(function() {
    if(!watchIsRunning){
        watchIsRunning = true;
        timer = setInterval(function(){
            game.tomagochiArray[0].hunger ++; 
            game.tomagochiArray[0].sleepyness ++; 
            game.tomagochiArray[0].boredom ++; 
        // this is adding the seconds to the html page in h1
        $('#hungry-stat').text(game.tomagochiArray[0].hunger)
        $('#bored-stat').text(game.tomagochiArray[0].boredom);
        $('#sleepyness-stat').text( game.tomagochiArray[0].sleepyness);
        // this is testing our creatures condtions
        imBored();
        imHungry();
        imSleepy();
    }, 1000)
    }})
    //These are decreasing the values of our stats via buttons
    giveFood();
    giveEntertainment();
    giveSleep();
