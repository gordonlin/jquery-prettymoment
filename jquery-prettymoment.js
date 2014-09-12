;(function(root, factory){
    'use strict';
    if( typeof define === 'function' && define.amd ) {
        define(['jquery', 'moment'], factory);
    } else {
        factory($, moment);
    }
} (this, function($, moment){
    $.fn.prettyMoment = function(){
        return this.each(function(){
            var $el = $(this);
            var update = function(){
                var momentObj = moment($el.attr('title'));
                $el.text(momentObj.fromNow());
            };
            update();
            setInterval(function(){
                update();
            }, 20000);
        });
    };
}));