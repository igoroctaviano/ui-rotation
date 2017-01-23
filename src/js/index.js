$(function() {
    function toggle(context) {
        context.classList.toggle("change");
    }

    var header = $('#header'),
        limit = 500;
    $(window).on('scroll', function() {
       var scrollTop = $(this).scrollTop();

       if (scrollTop > limit) {
          header.css({ 'opacity' : (scrollTop / limit - 1) });
       }
    });
});
