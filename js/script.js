const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const form = document.getElementById('whatsappForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const support = document.getElementById('support').value;
    const deadline = document.getElementById('deadline').value.trim();
    const message = document.getElementById('message').value.trim();

    const text =
      `Hello Fox Assignment Pro,\n\n` +
      `Name: ${name}\n` +
      `Subject/course: ${subject}\n` +
      `Support needed: ${support}\n` +
      `Deadline: ${deadline || 'Not provided'}\n` +
      `Message: ${message || 'I would like to discuss my requirements.'}`;

    window.open(`https://wa.me/447916691104?text=${encodeURIComponent(text)}`, '_blank');
  });
}
