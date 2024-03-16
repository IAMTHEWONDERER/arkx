function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
window.addEventListener('scroll', function() {
  var scrollDown = document.getElementById('scroll-down');
  if (window.scrollY > 80) {
    scrollDown.classList.add('hidden');
  } else {
    scrollDown.classList.remove('hidden');
  }
});
