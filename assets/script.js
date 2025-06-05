async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', './components/header.html');
  await loadComponent('main', './components/video.html');
  await loadComponent('cta', './components/cta.html');
  await loadComponent('footer', './components/footer.html');

  setTimeout(() => {
    document.getElementById('cta-button').classList.remove('hidden');
  }, 90000);
});
