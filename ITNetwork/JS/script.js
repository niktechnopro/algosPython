$(document).ready(function(){
  var $root = $('html, body');
	let headerHeight = $('#navbar').outerHeight(); //header height
  $('#body').css('margin-top', headerHeight-15);
  // Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash (just a name of a hash in section tag)
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      let offset = $(hash).offset().top - headerHeight;
      $root.animate({
        scrollTop:  offset
      }, 600);
    } 
    return false;
  });
});
