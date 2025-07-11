/* SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    let scrollTo = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);
    if (scrollTo < 0) scrollTo = 0;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
});