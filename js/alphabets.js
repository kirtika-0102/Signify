const ALPHABET_DATA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
  label: letter,
  gif: `img/alphabets/${letter}.gif`
}));

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('alphabet-grid');
  if (!grid) return;
  grid.innerHTML = ALPHABET_DATA.map(item => `
    <div class="sign-tile" data-label="${item.label}" data-gif="${item.gif}" tabindex="0" role="button" aria-label="Show sign for ${item.label}">
      <span class="tile-letter">${item.label}</span>
    </div>
  `).join('');
  grid.querySelectorAll('.sign-tile').forEach(tile => {
    tile.addEventListener('click', () => openSignModal(tile.dataset.label, tile.dataset.gif));
    tile.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();tile.click();} });
  });
});

function openSignModal(label, gifSrc) {
  document.getElementById('modal-title').textContent = `Letter "${label}"`;
  document.getElementById('modal-gif').innerHTML = `<img src="${gifSrc}" alt="Sign for ${label}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'gif-placeholder',textContent:'🤟'}))">`;
  document.getElementById('signModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('signModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => { if(e.target===document.getElementById('signModal')) closeModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });