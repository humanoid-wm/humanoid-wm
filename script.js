const dialog = document.querySelector('#figure-dialog');
const expanded = document.querySelector('#expanded-figure');
const caption = document.querySelector('#expanded-caption');
for (const link of document.querySelectorAll('[data-lightbox]')) {
  link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    expanded.src = link.href;
    expanded.alt = link.querySelector('img').alt;
    caption.textContent = expanded.alt;
    dialog.showModal();
  });
}
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); } });

for (const group of document.querySelectorAll('.motion-group')) {
  const videos = [...group.querySelectorAll('video')];
  group.querySelector('[data-play-group]').addEventListener('click', () => {
    for (const other of document.querySelectorAll('.motion-group video')) {
      if (!videos.includes(other)) other.pause();
    }
    for (const video of videos) video.play().catch(() => {});
  });
  group.querySelector('[data-pause-group]').addEventListener('click', () => {
    for (const video of videos) video.pause();
  });
  group.querySelector('[data-restart-group]').addEventListener('click', () => {
    for (const video of videos) { video.pause(); video.currentTime = 0; }
  });
}

for (const mount of document.querySelectorAll('[data-demo-src]')) {
  mount.querySelector('.load-demo').addEventListener('click', (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = 'Loading interactive demo…';
    mount.setAttribute('aria-busy', 'true');
    const frame = document.createElement('iframe');
    frame.title = mount.dataset.demoTitle;
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    frame.referrerPolicy = 'no-referrer';
    frame.src = mount.dataset.demoSrc;
    frame.classList.add('demo-loading');
    frame.addEventListener('load', () => {
      frame.classList.remove('demo-loading');
      mount.replaceChildren(frame);
      mount.removeAttribute('aria-busy');
    }, { once: true });
    mount.append(frame);
  });
}
