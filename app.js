const links = document.querySelector('.links');
const btn = document.querySelector('.nav-toggle');

btn.addEventListener('click', () => {
  const classes = links.classList;
  if (classes.contains('links')) {
    links.classList.toggle('show-links');
  }
});
