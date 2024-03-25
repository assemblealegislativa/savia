const cookieBanner = document.getElementById('cookie-banner');
const cookieAccettaBtn = document.getElementById('cookie-accetta');

function mostraBanner() {
  cookieBanner.style.opacity = '0';
  cookieBanner.style.display = 'block';
  setTimeout(() => {
    cookieBanner.style.opacity = '1';
  }, 100);
}

if (!localStorage.getItem('cookieAccettati')) {
  mostraBanner();
}

cookieAccettaBtn.addEventListener('click', () => {
  cookieBanner.style.opacity = '0';
  setTimeout(() => {
    cookieBanner.style.display = 'none';
  }, 1000);
  localStorage.setItem('cookieAccettati', true);
});
