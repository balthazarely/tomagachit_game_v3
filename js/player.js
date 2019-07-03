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
    // amHealthy () {
    //     if(this.health > 5) {
    //         console.log('you are unhealthy, game over!');
    //         }
    //     } 
    }
