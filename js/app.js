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
        this.tomagochiArray.push(newCharacture)
    }}

// reload the page function
$('#Reload').click(function() {
    location.reload();
 });

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

//transform from ned to homer
function gettingOlder() {
    if(seconds === 15) {
        $('.dancing').hide();
        $('.dancing-homer').show();
        $('#userNameHere').remove();
    }
}

function newName() {
    if(seconds === 15) {
        $('#userHomerHere').append("Homer");
        $('#homerMessage').append("Your pet has chosen its own name");
    } 
}

// get explosion when transform happens
function explosion() {
    if(seconds === 15) {
        $('.explosion').show();
    } else {
        $('.explosion').hide();
    }
}

function imBored() {
    if(game.tomagochiArray[0].boredom > 9) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } else if (game.tomagochiArray[0].boredom < 0) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } 
} 
function imSleepy() {
    if(game.tomagochiArray[0].sleepyness > 9) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } else if (game.tomagochiArray[0].sleepyness < 0) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } 
} 
function imHungry() {
    if(game.tomagochiArray[0].hunger > 9) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } else if (game.tomagochiArray[0].hunger < 0) {
        clearInterval(timer);
        $('.dancing').hide();
        $('.dancing-homer').hide();
    } 
} 

//this takes username and appends to page
$('#myform').submit(function(e) {
    let userName = $("#input_name").val();
    event.preventDefault();
    console.log(`the player has chosen the name ${userName}`);
    $('#userNameHere').append(`${userName}`);
        $("#myform").hide();
});

//initializing the game
$('#Load').on('click', (e) => {
    $('.dancing').show();
    if(e.target.tagName === 'BUTTON') {
    $(e.currentTarget).hide();
    game.createNewCharacture();
}})

// Starting the game 
$('#Start').on('click', (e) => {
    console.log("Lets start the game!");
    if(!watchIsRunning){
        watchIsRunning = true;
        if(e.target.id === 'Start') {
            $(e.currentTarget).hide();}
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
            if(seconds % 15 === 0){
                game.tomagochiArray[0].age ++;
            } 
        // this is appending the seconds to the html page in h1
            $('#clock').text(seconds);
            $('#hungry-stat').text(game.tomagochiArray[0].hunger)
            $('#bored-stat').text(game.tomagochiArray[0].boredom);
            $('#sleepyness-stat').text(game.tomagochiArray[0].sleepyness);
            $('#pet-age').text(game.tomagochiArray[0].age);
        // this is testing our creatures condtions
            gettingOlder();
            explosion();
            newName();
            imBored();
            imHungry();
            imSleepy();
            iDead();
        }, 1000)
    }})

//These are decreasing the values of our stats via buttons
giveFood();
giveEntertainment();
giveSleep();

//this takes the death and appends to page
function iDead (){
    if(game.tomagochiArray[0].sleepyness > 9) {
        $('#death').append("You never let me sleep.... of course im dead");
    } else if(game.tomagochiArray[0].hunger > 9) {
        $('#death').append("If you dont feed me, im gonna die. just like a real person");
    } else if(game.tomagochiArray[0].boredom > 9) {
        $('#death').append("its true, you can get so bored you atually die");
    } else if(game.tomagochiArray[0].sleepyness < 0) {
        $('#death').append("There is such a thing as too much sleep. i died");
    } else if(game.tomagochiArray[0].hunger < 0) {
        $('#death').append("You cant feed me that much and expect me to live....");
    } else if(game.tomagochiArray[0].boredom < 0) {
        $('#death').append("i appreciated all the play time, but it killed me");
    }
};

