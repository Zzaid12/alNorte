// Carrusel 3D tipo coverflow para sección "Nuestra Carta"
const cartaCarousel3dImages = [
  'img/plato1.jpg',
  'img/plato2.jpg',
  'img/plato3.jpg',
  'img/plato4.jpg',
  'img/plato5.jpg',
  'img/plato6.jpg',
  'img/plato7.jpg'
];
let cartaCarousel3dCurrent = 0;
let cartaCarousel3dInterval = null;

function renderCartaCarousel3d() {
  const cards = document.querySelector('.carta-carousel-3d-cards');
  cards.innerHTML = '';
  const total = cartaCarousel3dImages.length;

  // Mostrar 5 imágenes: dos a la izquierda, centro, dos a la derecha (solo en desktop)
  let idxs = [];
  if (window.innerWidth >= 900) {
    // Desktop: dos a la izquierda, centro, dos a la derecha
    idxs = [
      (cartaCarousel3dCurrent - 2 + total) % total,
      (cartaCarousel3dCurrent - 1 + total) % total,
      cartaCarousel3dCurrent,
      (cartaCarousel3dCurrent + 1) % total,
      (cartaCarousel3dCurrent + 2) % total
    ];
  } else {
    // Móvil/tablet: solo izquierda, centro, derecha
    idxs = [
      (cartaCarousel3dCurrent - 1 + total) % total,
      cartaCarousel3dCurrent,
      (cartaCarousel3dCurrent + 1) % total
    ];
  }
  idxs.forEach((idx, i) => {
    let className = '';
    if (window.innerWidth >= 900) {
      if (i === 0) className = 'far-left';
      else if (i === 1) className = 'left';
      else if (i === 2) className = 'center';
      else if (i === 3) className = 'right';
      else if (i === 4) className = 'far-right';
    } else {
      if (i === 0) className = 'left';
      else if (i === 1) className = 'center';
      else if (i === 2) className = 'right';
    }
    const card = document.createElement('div');
    card.className = 'carta-carousel-3d-card ' + className;
    const img = document.createElement('img');
    img.src = cartaCarousel3dImages[idx];
    card.appendChild(img);
    cards.appendChild(card);
  });
}

function nextCartaCarousel3d() {
  cartaCarousel3dCurrent = (cartaCarousel3dCurrent + 1) % cartaCarousel3dImages.length;
  renderCartaCarousel3d();
}

function startAutoCartaCarousel3d() {
  if (cartaCarousel3dInterval) clearInterval(cartaCarousel3dInterval);
  cartaCarousel3dInterval = setInterval(() => {
    nextCartaCarousel3d();
  }, 2800);
}

window.addEventListener('resize', renderCartaCarousel3d);

document.addEventListener('DOMContentLoaded', () => {
  // Crear estructura HTML sin botones
  const container = document.querySelector('.carta-carousel');
  container.innerHTML = `
    <div class="carta-carousel-3d-container">
      <div class="carta-carousel-3d-cards"></div>
    </div>
  `;
  renderCartaCarousel3d();
  startAutoCartaCarousel3d();
});
