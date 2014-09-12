;(function(root, factory){
    'use strict';
    if( typeof define === 'function' && define.amd ) {
        define(['jquery', 'moment'], factory);
    } else {
        factory($, moment);
    }
} (this, function($, moment){
    var defaultOptions = {
        interval: 20000,
        srcAttrName: 'title'
    };
    $.fn.prettyMoment = function(opts){
        var opts = $.extend(defaultOptions, opts);
        return this.each(function(){
            var $el = $(this);
            var update = function(){
                var momentObj = moment($el.attr(opts.srcAttrName));
                $el.text(momentObj.fromNow());
            };
            update();
            setInterval(function(){
                update();
            }, opts.interval);
        });
    };
}));