const nav = document.querySelector('#mynavBar')
const firstScreen = document.querySelector('.top-container')

document.addEventListener('scroll', function(e) {
  let scrollCount = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)
  
  if (scrollCount > firstScreen.clientHeight) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')    
  }
})