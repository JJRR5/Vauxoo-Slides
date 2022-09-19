odoo.define('academy.counter', function(require){
    'use strict';

    var Widget = require('web.Widget');
    var Core = require('web.core');
    require('web.dom_ready');

    var Counter = Widget.extend({
        init: function(parent, value) {
            this._super(parent);
            this.count = value;
        },
        events: {
            'click button': '_onClick',
        },
        _onClick: function(){
            this.count++;
            this.$('.val').text(this.count);
        },
        start: function(){
            return this._super.apply(this, arguments);
        },
    });

    var counterList = [];
    $('.counter').each(function(index){
        var counter = new Counter(this, 0);
        counter.setElement($(this)).start();
        counterList.push(counter);
    });


});