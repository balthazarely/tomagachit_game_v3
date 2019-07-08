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
        // console.log(newCharacture);
        // console.log(this.tomagochiArray)  
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
function imBored() {
    if(game.tomagochiArray[0].boredom > 9) {
        // alert('I died of boredom. didnt think that was possible');
        clearInterval(timer);
        $('.dancing').hide();
    } else if (game.tomagochiArray[0].boredom < 0) {
        // alert('I died from overaly stimulated');
        clearInterval(timer);
        $('.dancing').hide();
    } 
} 
function imSleepy() {
    if(game.tomagochiArray[0].sleepyness > 9) {
        // alert('I died from exhaustion');
        clearInterval(timer);
        $('.dancing').hide();
    } else if (game.tomagochiArray[0].sleepyness < 0) {
        // alert('I am dead cause i overslept');
        clearInterval(timer);
        $('.dancing').hide();
    } 
} 
function imHungry() {
    if(game.tomagochiArray[0].hunger > 9) {
        // alert('I starved, isnt that fun');
        clearInterval(timer);
        $('.dancing').hide();
    } else if (game.tomagochiArray[0].hunger < 0) {
        // alert('I died from obesity');
        clearInterval(timer);
        $('.dancing').hide();
    } 
} 

//this takes username and appends to page
$('#myform').submit(function(e) {
    // console.log($(e.target));
    let userName = $("#input_name").val();
    event.preventDefault();
    console.log(`the player has chosen the name ${userName}`);
    $('#userNameHere').append(`${userName}`);
    if(e.target.tagName === 'form') {
        $("#myform").hide();
    }
});

//initializing the game
$('#Load').on('click', (e) => {
    $('.dancing').show();
    if(e.target.tagName === 'BUTTON') {
    $(e.currentTarget).hide();
    game.createNewCharacture();
    
}})

// $("#letsboogie").click(function(){
//     $(".letsboogie").animate({
//         right: '500px'});
//   }, 1000);
// });


// Starting the game 
$('#Start').on('click', (e) => {
    console.log("Lets start the game!");
    if(!watchIsRunning){
        watchIsRunning = true;
        if(e.target.id === 'Start') {
            $(e.currentTarget).hide();}
        timer = setInterval(function(){
            seconds ++;
            if(seconds % 1 === 0){
                game.tomagochiArray[0].hunger ++; 
            }
            if(seconds % 1 === 0){
                game.tomagochiArray[0].sleepyness ++;
            } 
            if(seconds % 1 === 0){
                game.tomagochiArray[0].boredom ++;
            }
            if(seconds % 10 === 0){
                game.tomagochiArray[0].age ++;
            } 
        // this is appending the seconds to the html page in h1
            $('#clock').text(seconds);
            $('#hungry-stat').text(game.tomagochiArray[0].hunger)
            $('#bored-stat').text(game.tomagochiArray[0].boredom);
            $('#sleepyness-stat').text(game.tomagochiArray[0].sleepyness);
            $('#pet-age').text(game.tomagochiArray[0].age);
        // this is testing our creatures condtions
            imBored();
            imHungry();
            imSleepy();
            iDead();
        }, 1000)
    }})


//animate the dude





//These are decreasing the values of our stats via buttons
giveFood();
giveEntertainment();
giveSleep();

//this takes the death and appends to page
function iDead (){
    if(game.tomagochiArray[0].sleepyness > 9) {
        $('#death').append("You are a sicko that makes me sleep all the time. of course im dead");
    } else if(game.tomagochiArray[0].hunger > 9) {
        $('#death').append("well if you dont feed me, im gonna die. just like a real person");
    } else if(game.tomagochiArray[0].boredom > 9) {
        $('#death').append("its true, you can get so bored you atually die");
    } else if(game.tomagochiArray[0].sleepyness < 0) {
        $('#death').append("i am no rave creature, i must sleep at some point. i died");
    } else if(game.tomagochiArray[0].hunger < 0) {
        $('#death').append("more people die in america from being overed rather than under.... like me");
    } else if(game.tomagochiArray[0].boredom < 0) {
        $('#death').append("i appreciated all the play time, but it oddly killed me");
    }
};

