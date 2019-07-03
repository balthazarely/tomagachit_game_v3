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
            // console.log(game.tomagochiArray[0]); 
            game.tomagochiArray[0].hunger ++; 
            game.tomagochiArray[0].sleepyness ++; 
            game.tomagochiArray[0].boredom ++; 
    //  this is adding the seconds to the html page in h1
        $('#hungry-stat').text(game.tomagochiArray[0].hunger)
        $('#bored-stat').text(game.tomagochiArray[0].boredom);
        $('#sleepyness-stat').text( game.tomagochiArray[0].sleepyness);
    //  $('span').text(creatureAge);
    // this is testing our creatures condtions
        imBored();
        imHungry();
        imSleepy();
    }, 1000)
    }})
    giveFood();
    giveEntertainment();
    giveSleep();

// //global variables
// 

// // global variables that test conditions  //  should combine this into one statement
// function amHealthy () {
//     if(creatureHealth > 5) {
//         console.log('you are unhealthy, game over!');
//     }
// } 
// function amHappy () {
//     if(creatureHappy > 5) {
//         console.log('you are so unhappy, game over!');
//     }
// } 
// function amHungry () {
//     if(creatureHungry > 5) {
//         console.log('you are too hungry, game over!');
//     }
// } 

// function giveHealth() {
// $('#healthy').click(function() {
//     creatureHealth = creatureHealth - 2
// })}

// function giveHappy(){
// $('#happy').click(function() {
//     creatureHappy = creatureHappy - 2
// })}

// function giveFood() {
// $('#feed').click(function() {
//     creatureHungry = creatureHungry - 2
// })}




        // $('#Start').click(function() {
        //     if(!watchIsRunning){
        //         watchIsRunning = true;
        //         timer = setInterval(function(){
        //             tomagochi1.hunger ++;  // need to figure out how to vary these so they are not 1-1 with seconds
        //             tomagochi1.sleepyness ++;  // wonder if there is a way that can let me speed this up over time
        //             tomagochi1.boredom ++; //need to add age into this. shouldnt increase at the same rate either
        //             tomagochi1.age = creatureAge + .5;
        // this is adding the seconds to the html page in h1
        // $('#healthy-stat').text(creatureHealth)
        // $('#happy-stat').text(creatureHappy);
        // $('#feed-stat').text(creatureHungry);
        // $('span').text(creatureAge);


    //this is testing our creatures condtions
    // amHealthy();
    // amHappy();
    // amHungry();
    // }, 1000)
    // }})
    //BUTTONS: this is letting us feed the creature// might need to go into the class for creature
    // giveHealth();
    // giveHappy();
    // giveFood();

// // should have something that once the creature gets to a certain age, it dies but you dont loose
