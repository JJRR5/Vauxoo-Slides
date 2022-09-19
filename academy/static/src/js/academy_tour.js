odoo.define('academy.academy_tour', function(require){
    'use strict';

    var tour = require('web_tour.tour'),
        base = require('web_editor.base');
    
    tour.register('tour_show_biographies', {
        test: true,
        url: 'academy/get_teachers',
        wait_for: base.ready()
    },
    [
        {
            content: 'Click on the first teacher',
            trigger: 'p[data-teacher-id="1" a',
        },
        {
            content: 'Click on second teacher',
            trigger: 'p[data-teacher-id="2"] a',
            extra_trigger: '.s_comparisons',
        }
    ]
    );
});
