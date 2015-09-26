$(document).ready(function() {
    
    // Search input on focus
    $('#global-search-field').focusin(function() {
        $('#dropdown-search').show();
    });
    
    $('#global-search-field').focusout(function() {
        $('#dropdown-search').hide();
    });
});