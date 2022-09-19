odoo.define('academy.demo_rpc', function(require){
    'use strict';

    var Core = require('web.core'),
    Widget = require('web.Widget'),
    RPC = require('web.rpc');
    require('web.dom_ready');

    var RPCButton = Widget.extend({
        events: {
            'click .rpc-button': 'onClick'
        },
        init: function(parent, options){
            this._super.apply(this, arguments);
            this.options = _.extend(options || {},{});
        },
        onClick: function(e){
            RPC.query({
                route: '/academy/search_teacher',
                params: {
                    teacher_id : this.$el.data('teacher-id')
                }
            }).then(function(teachers_found){
                console.log(teachers_found``)
            });
            // RPC.query({
            //     model: 'academy.teacher',
            //     method: 'search_read',
            //     args: [[['id','=',this.$el.data('teacher-id')]], ['biography']],
            // }).then(function(res){
            //     if(res.length){
            //         console.log(res);
            //         $('.biography').html(data[0].biography);
            //     }
            // });
        },

    });
    if(!$('.rpc-container').length){
        return $.Defferred().reject('DOM does not contains .rpc-container');
    }
    $('.rpc-container').each(function(index){
        var $elem = $(this);
        var button = new RPCButton(null, $elem.data());
        button.attachTo($elem);
    })
    return RPCButton;
});
