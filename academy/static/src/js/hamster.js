odoo.define('academy.hamster', function(require){
    'use strict';

    var Animal = require('academy.animal');

    var DanceMixing = {
        dance: function (){
            console.log("Dancing");
        },
    };

    var Hamster = Animal.extend(DanceMixing, {
        sleep: function(){
            console.log('Sleeping......');
        }
    });

    var hamster = new Hamster();
    hamster.dance();
    hamster.sleep();
});
