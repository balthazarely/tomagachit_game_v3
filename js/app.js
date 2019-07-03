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
         game.tomagochiArray[0].hunger = game.tomagochiArray[0].hunger -1;
})}

function giveEntertainment() {
    $('#bored').click(function() {
         game.tomagochiArray[0].boredom = game.tomagochiArray[0].boredom -1;
})}

function giveSleep() {
    $('#sleepyness').click(function() {
         game.tomagochiArray[0].sleepyness = game.tomagochiArray[0].sleepyness -1;
})}

// Functions to test conditions
function imBored() {
    if(game.tomagochiArray[0].boredom > 9) {
        console.log('I died of boredom. didnt think that was possible');
        alert('I died of boredom. didnt think that was possible');
        clearInterval(timer);
    } else if (game.tomagochiArray[0].boredom < 0) {
        console.log('I died from overaly stimulated');
        alert('I died from overaly stimulated');
        clearInterval(timer);
    } 
} 

function imSleepy() {
    if(game.tomagochiArray[0].sleepyness > 9) {
        console.log('I am dead cause i overslept');
        alert('I am dead cause i overslept');
        clearInterval(timer);
    } else if (game.tomagochiArray[0].sleepyness < 0) {
        console.log('I am so awake i died');
        alert('I am so awake i died');
        clearInterval(timer);
    } 
} 
function imHungry() {
    if(game.tomagochiArray[0].hunger > 9) {
        console.log('I starved, snt that fun');
        alert('I starved, isnt that fun');
        clearInterval(timer);
    } else if (game.tomagochiArray[0].hunger < 0) {
        console.log('I died from obesity');
        alert('I died from obesity');
        clearInterval(timer);
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
            if(seconds % 1 === 0){
                game.tomagochiArray[0].hunger ++; 
            }
            if(seconds % 2 === 0){
                game.tomagochiArray[0].sleepyness ++;
            } 
            if(seconds % 1 === 0){
                game.tomagochiArray[0].boredom ++;
            }
            if(seconds % 10 === 0){
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
        // way to get the user to add name and add it to the page
        // all the css, etc.