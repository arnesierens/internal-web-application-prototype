$(document).ready(function() {
    
    // Search input on focus
    $('#js-search-main').focusin(function() {
        $('#js-search-main-dropdown').show();
    });
    
    $('#js-search-main').focusout(function() {
        $('#js-search-main-dropdown').hide();
    });
    
    // Profile dropdown
    $('#js-user-profile').click(function(e) {
        e.preventDefault();
        $('#js-user-profile-dropdown').toggle();
    });
//    
//    // Messages dropdown
//    $('#header-messages').click(function(e) {
//        e.preventDefault();
//        $('#header-messages-dropdown').toggle();
//    });
//    
//    // Hide profile dropdown if click is outside of dropdown
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#js-user-profile').length) {
            $('#js-user-profile-dropdown').hide();
        }
        
//        if(!$(e.target).closest('#header-messages').length) {
//            $('#header-messages-dropdown').hide();
//        }
    });
    
    
    // Back to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#js-back-to-top').show();
        } else {
            $('#js-back-to-top').hide();
        }
    });
    
    $('#js-back-to-top').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});