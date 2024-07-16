document.addEventListener('DOMContentLoaded', () => {
  const chapters = document.querySelectorAll('.chapter');
  const sections = document.querySelectorAll('.section');

  chapters.forEach(chapter => {
    chapter.addEventListener('click', () => {
      const target = document.getElementById(chapter.getAttribute('data-target'));
      if (target.style.display === 'block') {
        target.style.display = 'none';
      } else {
        target.style.display = 'block';
      }
    });
  });

  sections.forEach(section => {
    section.addEventListener('click', () => {
      const target = document.getElementById(section.getAttribute('data-target'));
      if (target.style.display === 'block') {
        target.style.display = 'none';
      } else {
        target.style.display = 'block';
      }
    });
  });
});
