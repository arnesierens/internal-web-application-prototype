$(document).ready(function() {
    
    // Search input on focus
    $('#global-search-field').focusin(function() {
        $('#dropdown-search').show();
    });
    
    $('#global-search-field').focusout(function() {
        $('#dropdown-search').hide();
    });
    
    // Profile dropdown
    $('#header-profile').click(function(e) {
        e.preventDefault();
        $('#header-profile-dropdown').toggle();
    });
    
    // Messages dropdown
    $('#header-messages').click(function(e) {
        e.preventDefault();
        $('#header-messages-dropdown').toggle();
    });
    
    // Hide profile dropdown if click is outside of dropdown
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#header-profile').length) {
            $('#header-profile-dropdown').hide();
        }
        
        if(!$(e.target).closest('#header-messages').length) {
            $('#header-messages-dropdown').hide();
        }
    });
});