$(function() {
    $('body').removeClass('fade-out');
});


var $overlay = $('<div id="overlay"></div>');
var $modalBox = $('<div id="modalBox"></div>');
var $image = $('<img>');
var $caption = $('<p id = "modalCaption"></p>');


$modalBox.append($caption).append($image);
$overlay.append($modalBox);
//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$(".thumbColumn a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.fadeIn("slow");
  $modalBox.fadeIn("slow");  
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.fadeOut("slow");
  $modalBox.fadeIn("slow");
});


//Smooth scrolling
  $(".navButton").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTopButton').fadeIn();
    } else {
        $('#toTopButton').fadeOut();
    }
});

$("#toTopButton").click(function() {
    $("html, body").animate({scrollTop: 0}, 800);
 });








