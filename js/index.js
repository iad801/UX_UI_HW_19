$(document).ready(function() {
    var $open = $('#openContactForm');
    var $modal = $('.contactFormContainer');
    var $overlay = $("#modalOverlay");
    var $close = $('.close');

    $open.on('click', function() {
        $overlay.fadeIn();
        $modal.fadeIn();
    });

    /*
    $close.on('click', function() {
        $overlay.fadeOut();
        $modal.fadeOut();
    });
    */
    
    $overlay.on('click', function() {
        $overlay.fadeOut();
        $modal.fadeOut();
    });
});