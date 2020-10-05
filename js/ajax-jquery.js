/* LOADING HTML INTO A PAGE WITH JQUERY */
// LOADING CONTENT
$('nav a').on('click', function(e) { // User clicks nav link
    e.preventDefault(); // Stop loading new link
    var url = this.href; // Get value of href

    $('nav a.current').removeClass('current'); // Clear current indicator
    $(this).addClass('current'); // New current indicator

    $('#container').remove(); // Remove old content
    $('#main-content').load(url + ' #main-content ').hide().fadeIn(2000); // New content
});