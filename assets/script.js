async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', './components/header.html');
  await loadComponent('main', './components/video.html');
  const inline = document.getElementById('scr_6842141d891666ff59083fee');
  if (inline) {
    eval(inline.innerText);
  }
  await loadComponent('cta', './components/cta.html');
  await loadComponent('footer', './components/footer.html');

  setTimeout(() => {
    document.getElementById('cta-button').classList.remove('hidden');
  }, 90000);
});
