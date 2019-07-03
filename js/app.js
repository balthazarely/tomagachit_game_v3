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
    }}


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

// Functions to test conditions
function imBored() {
    if(game.tomagochiArray[0].boredom > 2) {
        console.log('I am so bored, game over!');
        clearInterval(timer);
    } else if(game.tomagochiArray[0].boredom < -1) {
        console.log('I am overaly stimulated, game over!');
}
} 

function imSleepy() {
    if(game.tomagochiArray[0].sleepyness > 2) {
    //     console.log('I am so tired, game over!');
    //     clearInterval(timer);
    }
} 

function imHungry() {
    if(game.tomagochiArray[0].hunger > 3) {
        // console.log('I am so hungry, game over!');
        // clearInterval(timer);
    }
} 

//initializing the game
$('#Load').on('click', (e) => {
    console.log($(e.target));
    if(e.target.tagName === 'BUTTON') {
    $(e.currentTarget).hide();
    game.createNewCharacture();
    }
})


$('#Start').click(function() {
    if(!watchIsRunning){
        watchIsRunning = true;
        timer = setInterval(function(){
            seconds ++;
            if(seconds % 3 === 0){
                game.tomagochiArray[0].hunger ++; 
            }
            if(seconds % 2 === 0){
                game.tomagochiArray[0].sleepyness ++;
            } 
            if(seconds % 2 === 0){
                game.tomagochiArray[0].boredom ++;
            }
            if(seconds % 8 === 0){
                game.tomagochiArray[0].age ++;
            } 
        // this is adding the seconds to the html page in h1
            $('#clock').text(seconds);
            $('#hungry-stat').text(game.tomagochiArray[0].hunger)
            $('#bored-stat').text(game.tomagochiArray[0].boredom);
            $('#sleepyness-stat').text(game.tomagochiArray[0].sleepyness);
            $('span').text(game.tomagochiArray[0].age);
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



    // things that need to be added
        // mechanism to end the game once the player has hit too much of a number
        // way to get the user to add name and add it to the page
        // all the css, etc.