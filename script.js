// obsługa przycisku "Dowiedz się więcej"
const learnMoreButton = document.querySelector('.button');
const learnMoreSection = document.querySelector('.learn-more');

learnMoreButton.addEventListener('click', () => {
  learnMoreSection.scrollIntoView({
    behavior: 'smooth'
  });
});



// obsługa menu nawigacji
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
