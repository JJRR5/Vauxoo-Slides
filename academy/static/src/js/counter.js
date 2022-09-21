odoo.define('academy.counter', function(require){
    'use strict';

    var Widget = require('web.Widget');
    var Core = require('web.core');
    require('web.dom_ready');

    var Counter = Widget.extend({
        events: {
            'click button': '_onClick',
        },
        init: function(parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onClick: function(){
            this.count++;
            this.$('.val').text(this.count);
        },
    });

    $('.counter').each(function(index){
        var counter = new Counter(this, 0);
        counter.setElement($(this)).start();
    });
});
