
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.hidden-section').forEach(s => s.style.display = 'none');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.style.display = 'block';
  });
});
    