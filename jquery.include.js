/**
 * IncludeHtml - jQuery plugin to include remote html within a custom
 *                   html <include> tag.
 *
 * Copyright (c) 2010 David Coallier <david.coallier@gmail.com>
 *
 * Examples at http://wiki.github.com/davidcoallier/include-json-html/
 */
(function($) {
    $.fn.include = function(settings) {
        this.each(function() {
            var container = $(this);
            var pageSrc   = $(this).attr('src');
            
            $.get(pageSrc, {}, function(data) {
                container.html(data);
            });
        });

        return this;
    };
})(jQuery);
