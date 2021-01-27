// window.onscroll = function() {stickyNavBar()}; 
// var navBar = document.getElementById("mynavBar")
// var sticky = navBar.offsetTop;

// function stickyNavBar(){
// 	if(window.pageYOffset > sticky){
// 		navBar.classList.add("sticky");
// 	} else{
// 		navBar.classList.remove("sticky");
// 	}
// }

// const nav = document.querySelector('#mynavBar')
// const firstScreen = document.querySelector('.top-container')
// document.addEventListener('scroll', function(e) {
//   let scrollCount = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

//   if (scrollCount > firstScreen.clientHeight) {
//     nav.classList.add('sticky')
//   } else {
//     nav.classList.remove('sticky')    
//   }
// }) 

$(document).ready(function() {
  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky'); 
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});