const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
const siteHeader = document.querySelector('.site-header');

toggle.addEventListener('click', function() {
  siteHeader.classList.toggle('menu-open');
  const thisToggle = this;
  menu.classList.toggle('is-active');
  const isMenuActive = menu.classList.contains('is-active');
  thisToggle.setAttribute('aria-expanded', isMenuActive ? 'true' : 'false');
});
