document.getElementById('alert').onclick = function(){
window.alert("We are not taking sign ups at this time.")
}

// 1. on clicking of the hamburger, show the nav by animating it's left value to 0

$(".hamburger").on("click", function(){
 $("header nav").animate({
   left: 0
 });
});

// 2. on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%

$(".close-nav").on("click", function(){
 $("header nav").animate({
   left: '100%'
 });
});


// 3. on resizing of the browser, we want to reset any styles set if we are back on desktop). Look into removeAttr to remove the inline styles that's being added to the nav element
$(window).on('resize', function(){
    if ($(window).width() >= 580) {
              $("header nav").removeAttr('style');    
    }

});

