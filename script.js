document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});
