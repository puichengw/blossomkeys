/* Mobile nav toggle */
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    })
  );
}

/* Scroll reveal */
const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  io.observe(el);
});

/* Contact form — sends enquiries to the inbox via Web3Forms */
const form = document.querySelector('#contact-form');
if (form) {
  const note = document.querySelector('#form-status');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const val = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (!val('name') || !val('email')) {
      note.className = 'form-note is-error';
      note.style.color = '';
      note.textContent = 'Please add your name and email so we can reply.';
      note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    note.className = 'form-note';
    note.style.color = 'var(--muted)';
    note.textContent = 'Sending your enquiry…';
    if (btn) btn.disabled = true;
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
      const out = await res.json();
      if (out.success) {
        note.className = 'form-note is-success';
        note.style.color = '';
        note.textContent = '\u2713 Thank you — your enquiry has been sent. We\u2019ll be in touch soon.';
        form.reset();
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        note.className = 'form-note is-error';
        note.style.color = '';
        note.textContent = 'Sorry, something went wrong. Please try again in a moment.';
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (err) {
      note.className = 'form-note is-error';
      note.style.color = '';
      note.textContent = 'Sorry, something went wrong. Please check your connection and try again.';
      note.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
