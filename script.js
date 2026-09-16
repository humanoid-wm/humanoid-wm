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
