const WORDS_DATA = [
  { label:'Hello',    icon:'👋', gif:'img/words/hello.gif' },
  { label:'Thank You',icon:'🙏', gif:'img/words/thank-you.gif' },
  { label:'Please',   icon:'🤲', gif:'img/words/please.gif' },
  { label:'Sorry',    icon:'😔', gif:'img/words/sorry.gif' },
  { label:'Yes',      icon:'✅', gif:'img/words/yes.gif' },
  { label:'No',       icon:'✋', gif:'img/words/no.gif' },
  { label:'Help',     icon:'🆘', gif:'img/words/help.gif' },
  { label:'Love',     icon:'❤️', gif:'img/words/love.gif' },
  { label:'Friend',   icon:'🤝', gif:'img/words/friend.gif' },
  { label:'Family',   icon:'👨‍👩‍👧', gif:'img/words/family.gif' },
  { label:'Eat',      icon:'🍽️', gif:'img/words/eat.gif' },
  { label:'Water',    icon:'💧', gif:'img/words/water.gif' },
  { label:'Home',     icon:'🏠', gif:'img/words/home.gif' },
  { label:'School',   icon:'🎓', gif:'img/words/school.gif' },
  { label:'Happy',    icon:'😊', gif:'img/words/happy.gif' },
  { label:'Good',     icon:'👍', gif:'img/words/good.gif' },
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('words-grid');
  if (!grid) return;
  grid.innerHTML = WORDS_DATA.map(item => `
    <div class="sign-tile" data-label="${item.label}" data-gif="${item.gif}" tabindex="0" role="button" aria-label="Show sign for ${item.label}">
      <span class="tile-icon">${item.icon}</span>
      <span class="tile-label">${item.label}</span>
    </div>
  `).join('');
  grid.querySelectorAll('.sign-tile').forEach(tile => {
    tile.addEventListener('click', () => openSignModal(tile.dataset.label, tile.dataset.gif));
    tile.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();tile.click();} });
  });
});

function openSignModal(label, gifSrc) {
  document.getElementById('modal-title').textContent = label;
  document.getElementById('modal-gif').innerHTML = `<img src="${gifSrc}" alt="Sign for ${label}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'gif-placeholder',textContent:'💬'}))">`;
  document.getElementById('signModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('signModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => { if(e.target===document.getElementById('signModal')) closeModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });