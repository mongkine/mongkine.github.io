document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    const id = link.getAttribute('href');
    document.querySelector(id).classList.remove('hidden');
    window.scrollTo({ top: document.querySelector(id).offsetTop, behavior: 'smooth' });
  });
});
