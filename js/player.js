class Tomagochi {
    constructor(){
        this.name = 'ben';
        this.hunger = 0;
        this.sleepyness = 0;
        this.boredom = 0;
        this.age = 0;
    }
    greetings(){
        console.log("hello world, i am your new friend");
    }
    initPlayer(){
        const $div = $('<div/>');
        const $h1 = $(`<h1>${this.name}</h1>`);
        $div.append($h1);
        console.log(this, "< this inside of init");
        $('#grid').append($div);
        this.$location = $div;
    }
    ender(){
        if(this.health > 2){
            console.log("You are a terrible pet owner, your friend has died due to your failure");
        }
    //     if(this.hunger > 5){
    //         alert("you die bro");
    //     }
    }
}