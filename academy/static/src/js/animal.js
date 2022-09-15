odoo.define('academy.animal', function (require){
    'use strict';

    var classTest = require('web.Class');

    var Animal = classTest.extend({
        init: function (){
            this.x = 0
            this.hunger = 0;
        },
        move: function (){
            this.x += 1;
            this.hunger += 1;
            console.log(`You move: ${this.x}, now you have this hunger: ${this.hunger}`)
        },
        eat: function (){
            this.hunger = 0;
        }
    });

    var animal = new Animal();
    animal.move();
    animal.eat();

    return Animal;
});
