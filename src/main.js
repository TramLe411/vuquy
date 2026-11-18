
import { wedding as w } from './config.js';

const photos = [
  '/images/photo-01.jpg',
  '/images/photo-02.jpg',
  '/images/photo-03.jpg',
  '/images/photo-04.jpg',
  '/images/photo-05.jpg',
  '/images/photo-06.jpg',
  '/images/photo-07.jpg'
];

const $ = (s) => document.querySelector(s);

const mapUrl = w.mapUrl;
const start = new Date(w.event.date);

const calStart = '20261206T040000Z';
const calEnd = '20261206T060000Z';

const calendarUrl =
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${w.event.type} ${w.bride.fullName} & ${w.groom.fullName}`)}&dates=${calStart}/${calEnd}&details=${encodeURIComponent(`Trân trọng kính mời. Địa điểm: ${w.event.venue}. ${w.event.address}`)}&location=${encodeURIComponent(w.event.address)}`;

const root = $('#root');

root.innerHTML = `
<audio id="music" src="${w.music}" loop preload="auto"></audio>

<div class="cover-screen" id="cover">
  <div class="cover-card">
    <img class="cover-ornament top-left" src="/images/envelope-floral.png" alt="" aria-hidden="true">
    <img class="cover-ornament bottom-right" src="/images/envelope-floral.png" alt="" aria-hidden="true">

    <div class="cover-heart" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.51L12 21.35Z" />
      </svg>
    </div>
    <div class="eyebrow">WEDDING INVITATION</div>

    <!-- SHORT NAMES ON THE FRONT COVER -->
    <h1>
      Như Trâm
      <span>&</span>
      Duy Thành
    </h1>

    <div class="cover-rule"><i></i></div>

    <p class="cover-date">06 tháng 12, 2026</p>
    <p class="cover-venue">Tư Gia Nữ</p>

    <button class="open-button" id="open">Mở thiệp</button>
  </div>

  <div class="cover-footer">WITH LOVE · 2026</div>
</div>

<div class="heart-particles" id="heartParticles" aria-hidden="true"></div>

<main class="invitation" id="invitation">
<div class="invitation-side-flowers" aria-hidden="true">
  ${Array.from({ length: 7 }, (_, i) => `
    <img class="side-blossom left" style="top:${6 + i * 14}%;--flower-delay:${-i * 1.1}s" src="/images/envelope-floral.png" alt="">
    <img class="side-blossom right" style="top:${6 + i * 14}%;--flower-delay:${-i * 1.1 - .5}s" src="/images/envelope-floral.png" alt="">
  `).join('')}
</div>

<header class="hero paper-section">
  <div class="hero-side-flowers" aria-hidden="true">
    <img class="hero-flower left" src="/images/envelope-floral.png" alt="">
    <img class="hero-flower right" src="/images/envelope-floral.png" alt="">
  </div>

  <div class="envelope-wrap">
    <img
      class="envelope-flower"
      src="/images/envelope-floral.png"
      alt=""
      aria-hidden="true"
    >

    <div class="envelope">
      <div class="envelope-photo">
        <img src="/images/photo-03.jpg" alt="Ảnh cưới Như Trâm và Duy Thành">
      </div>

      <div class="envelope-front">
        <i class="envelope-fold left" aria-hidden="true"></i>
        <i class="envelope-fold right" aria-hidden="true"></i>
        <span>♥</span>
      </div>

      <div class="seal">
        <img
          src="/images/wax-seal-heart.png"
          alt="Con dấu sáp vàng hình trái tim"
        >
      </div>
    </div>
  </div>

  <p class="eyebrow">THE WEDDING OF</p>

  <h1 class="couple-names">
    ${w.bride.fullName}<br>
    <span>&</span><br>
    ${w.groom.fullName}
  </h1>

  <div class="tiny-flower">❧</div>
</header>

<section class="family-card burgundy-card reveal">
  <div class="family-columns">
    <div>
      <p class="small-caps">Nhà gái</p>
      <p class="small-caps">Ông Bà</p>
      <p>${w.brideFamily.father}</p>
      <p>${w.brideFamily.mother}</p>
      <small>${w.brideFamily.address}</small>
    </div>

    <div>
      <p class="small-caps">Nhà trai</p>
      <p class="small-caps">Ông Bà</p>
      <p>${w.groomFamily.father}</p>
      <p>${w.groomFamily.mother}</p>
      <small>${w.groomFamily.address}</small>
    </div>
  </div>

  <div class="floral-corner">❧</div>
</section>

<section class="announcement paper-section reveal">
  <p class="eyebrow">TRÂN TRỌNG BÁO TIN</p>
  <p class="subheading">LỄ VU QUY CỦA CON CHÚNG TÔI</p>

  <h2>${w.bride.fullName}</h2>
  <p class="role">${w.bride.title}</p>

  <div class="ampersand">&</div>

  <h2>${w.groom.fullName}</h2>
  <p class="role">${w.groom.title}</p>

  <p class="ceremony-copy">
    LỄ VU QUY ĐƯỢC CỬ HÀNH TẠI<br>
    <strong>${w.event.venue.toUpperCase()}</strong>
  </p>

  <p class="time-line">
    VÀO LÚC ${w.event.time} &nbsp; ${w.event.day.toUpperCase()}
  </p>

  <div class="date-display">
    <strong>${w.event.dayNumber}</strong>
    <span>THÁNG ${w.event.month}<br>${w.event.year}</span>
  </div>

  <p class="lunar">(${w.event.lunar})</p>
  <div class="floral-corner right">❧</div>
</section>

<section class="album paper-section reveal">
  <p class="section-title">ALBUM ẢNH</p>

  <div class="carousel" id="carousel">
    <div class="cube-scene" id="cubeScene" aria-live="polite">
      <div class="cube-face cube-front"><img id="cubeFront" src="${photos[0]}" alt="Album"></div>
      <div class="cube-face cube-right"><img id="cubeRight" src="${photos[1]}" alt=""></div>
      <div class="cube-face cube-back"><img id="cubeBack" src="${photos[2]}" alt=""></div>
      <div class="cube-face cube-left"><img id="cubeLeft" src="${photos[6]}" alt=""></div>
    </div>

    <button class="carousel-arrow prev" id="prev"
      aria-label="Ảnh trước">‹</button>

    <button class="carousel-arrow next" id="next"
      aria-label="Ảnh tiếp">›</button>
  </div>

  <div class="dots" id="dots">
    ${photos.map((_, i) =>
      `<button data-index="${i}" class="${i === 0 ? 'active' : ''}"
        aria-label="Ảnh ${i + 1}"></button>`
    ).join('')}
  </div>
</section>


<section class="party-card burgundy-card reveal">
  <p class="section-title light">THÔNG TIN TIỆC CƯỚI</p>
  <p class="party-intro">TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:</p>

  <p class="time-line">
    ${w.event.time} &nbsp; ${w.event.day.toUpperCase()}
  </p>

  <div class="date-display">
    <strong>${w.event.dayNumber}</strong>
    <span>THÁNG ${w.event.month}<br>${w.event.year}</span>
  </div>

  <p class="lunar">(${w.event.lunar})</p>
  <p class="count-label">Cùng đếm ngược</p>

  <div class="countdown">
    <div><strong id="cd-d">00</strong><small>Ngày</small></div>
    <div><strong id="cd-h">00</strong><small>Giờ</small></div>
    <div><strong id="cd-m">00</strong><small>Phút</small></div>
    <div><strong id="cd-s">00</strong><small>Giây</small></div>
  </div>

  <!-- CALENDAR nằm bên trong khung đỏ -->
  <div class="calendar-paper">
    <h3>Tháng 12 / 2026</h3>

    <div class="calendar-grid weekday">
      ${'T2 T3 T4 T5 T6 T7 CN'.split(' ')
        .map(x => `<span>${x}</span>`).join('')}
    </div>

    <div class="calendar-grid days">
      ${Array.from({ length: 35 }, (_, i) => {
        const d = i - 2;

        if (d < 1 || d > 31) {
          return `<span class="empty-day"></span>`;
        }

        if (d === 6) {
          return `
            <span class="wedding-day">
              <svg class="heart-marker"
                   viewBox="0 0 100 90"
                   xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <path
                  d="M50 88
                     C43 81 5 52 5 27
                     C5 10 17 2 31 2
                     C40 2 47 7 50 16
                     C54 7 61 2 70 2
                     C84 2 95 10 95 27
                     C95 52 57 81 50 88Z"
                  fill="#651522"
                />
              </svg>
              <span class="day-number">6</span>
            </span>
          `;
        }

        return `<span class="calendar-day">${d}</span>`;
      }).join('')}
    </div>
  </div>

  <!-- Nút thêm lịch nằm dưới bảng lịch -->
  <a class="calendar-button"
     href="${calendarUrl}"
     target="_blank"
     rel="noreferrer">
    ▦ &nbsp;Thêm vào lịch
  </a>

  <div class="floral-corner">❧</div>
</section>


<section class="location-section paper-section reveal">
  <p class="section-title location-title">
    LỄ VU QUY TỔ CHỨC TẠI TƯ GIA NỮ
  </p>

  <p class="location-address">${w.event.address}</p>

  <a class="map-frame" href="${mapUrl}"
    target="_blank" rel="noreferrer">
    <iframe
      title="Bản đồ địa điểm tiệc cưới"
      src="https://maps.google.com/maps?q=${encodeURIComponent(w.mapQuery)}&output=embed"
      loading="lazy">
    </iframe>
  </a>

  <a class="directions-button" href="${mapUrl}"
    target="_blank" rel="noreferrer">
    ➤ &nbsp;Chỉ đường
  </a>

  <p class="thank-you">
    Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
  </p>

  <p class="signature">Trân trọng kính mời</p>
</section>

<footer class="footer">
  NHƯ TRÂM <span>♥</span> DUY THÀNH · 2026
</footer>

</main>

<button class="music-toggle" id="musicToggle"
  aria-label="Bật tắt nhạc" hidden>♫</button>
`;

let slide = 0;
const audio = $('#music');

startAmbientParticles();

let slideTransitionTimer;
let slideAnimating = false;
let cubeAngle = 0;
const cubeFaces = [$('#cubeFront'), $('#cubeRight'), $('#cubeBack'), $('#cubeLeft')];

function renderSlide(direction = 1) {
  if (slideAnimating) return;
  slideAnimating = true;

  const carousel = $('#carousel');
  const cubeScene = $('#cubeScene');
  window.clearTimeout(slideTransitionTimer);
  const currentFront = ((-cubeAngle / 90) % cubeFaces.length + cubeFaces.length) % cubeFaces.length;
  const incomingFace = (currentFront + direction + cubeFaces.length) % cubeFaces.length;
  cubeFaces[incomingFace].src = photos[slide];
  cubeAngle -= direction * 90;
  cubeScene.style.transform = `translate3d(-50%, -50%, 0) rotateY(${cubeAngle}deg)`;

  slideTransitionTimer = window.setTimeout(() => {
    const frontFace = ((-cubeAngle / 90) % cubeFaces.length + cubeFaces.length) % cubeFaces.length;
    const photoOffsets = [0, 1, 2, -1];
    photoOffsets.forEach((offset, position) => {
      const faceIndex = (frontFace + position) % cubeFaces.length;
      cubeFaces[faceIndex].src = photos[(slide + offset + photos.length) % photos.length];
    });
    slideAnimating = false;
  }, 950);

  document.querySelectorAll('#dots button').forEach((b, i) =>
    b.classList.toggle('active', i === slide)
  );
}

function next() {
  if (slideAnimating) return;
  slide = (slide + 1) % photos.length;
  renderSlide(1);
}

function prev() {
  if (slideAnimating) return;
  slide = (slide - 1 + photos.length) % photos.length;
  renderSlide(-1);
}

$('#next').addEventListener('click', next);
$('#prev').addEventListener('click', prev);

$('#dots').addEventListener('click', e => {
  const b = e.target.closest('button[data-index]');
  if (b && !slideAnimating) {
    const nextSlide = Number(b.dataset.index);
    if (nextSlide === slide) return;
    const forwardDistance = (nextSlide - slide + photos.length) % photos.length;
    slide = nextSlide;
    renderSlide(forwardDistance <= photos.length / 2 ? 1 : -1);
  }
});

setInterval(next, 4200);

function startAmbientParticles() {
  const layer = $('#heartParticles');
  if (!layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const symbols = ['✦', '♥', '♡', '❧'];
  const spawn = () => {
    // Stop adding ambient particles as soon as the cover starts to close.
    if ($('#cover')?.classList.contains('closing')) return;
    // Keep a small number of particles alive so the cover feels gently animated.
    if (document.querySelectorAll('.ambient-particle').length >= 16) return;

    const particle = document.createElement('span');
    particle.className = 'ambient-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = (4 + Math.random() * 92) + 'vw';
    particle.style.setProperty('--drift', (Math.random() * 100 - 50).toFixed(1) + 'px');
    particle.style.setProperty('--rise', (window.innerHeight + 70 + Math.random() * 110).toFixed(1) + 'px');
    particle.style.setProperty('--duration', (6.5 + Math.random() * 4).toFixed(2) + 's');
    particle.style.setProperty('--scale', (0.7 + Math.random() * 0.75).toFixed(2));
    layer.appendChild(particle);

    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  };

  // Stagger the first few particles, then keep the movement calm and continuous.
  for (let i = 0; i < 7; i++) {
    window.setTimeout(spawn, i * 420);
  }
  window.setInterval(spawn, 620);
}

function launchHearts() {
  const layer = $('#heartParticles');
  if (!layer) return;

  layer.querySelectorAll('.ambient-particle').forEach(p => p.remove());

  const button = $('#open');
  const rect = button
    ? button.getBoundingClientRect()
    : { left: innerWidth / 2 - 50, top: innerHeight * .62, width: 100, height: 44 };

  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const symbols = ['♥', '♡', '❤'];

  for (let i = 0; i < 28; i++) {
    const heart = document.createElement('span');

    heart.className = 'float-heart';
    heart.textContent = symbols[i % symbols.length];

    const drift = (Math.random() * 230 - 115).toFixed(1) + 'px';
    const rise = (originY + 50 + Math.random() * 100).toFixed(1) + 'px';
    const duration = (2.1 + Math.random() * 1.15).toFixed(2) + 's';
    const delay = (Math.random() * .32).toFixed(2) + 's';
    const scale = (0.8 + Math.random() * .85).toFixed(2);

    heart.style.setProperty('--drift', drift);
    heart.style.setProperty('--rise', rise);
    heart.style.setProperty('--duration', duration);
    heart.style.setProperty('--delay', delay);
    heart.style.setProperty('--scale', scale);

    heart.style.left = (originX - 12 + (Math.random() * 50 - 25)) + 'px';
    heart.style.top = (originY - 10 + (Math.random() * 24 - 12)) + 'px';

    layer.appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove(), {
      once: true
    });
  }
}

function slowlyScrollToBottom(duration = 120000) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
  const startedAt = performance.now();
  let frameId;

  root.style.scrollBehavior = 'auto';

  const stop = () => {
    cancelAnimationFrame(frameId);
    root.style.scrollBehavior = previousScrollBehavior;
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
  };

  window.addEventListener('wheel', stop, { once: true, passive: true });
  window.addEventListener('touchstart', stop, { once: true, passive: true });
  window.addEventListener('keydown', stop, { once: true });

  const step = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    window.scrollTo(0, maxScroll * progress);

    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    } else {
      stop();
    }
  };

  frameId = requestAnimationFrame(step);
}

$('#open').addEventListener('click', async () => {
  const openButton = $('#open');

  if (openButton.dataset.opened === 'true') return;

  openButton.dataset.opened = 'true';

  $('#cover').classList.add('closing');
  $('#invitation').classList.add('is-open');
  $('#musicToggle').hidden = false;

  launchHearts();
  window.setTimeout(() => slowlyScrollToBottom(), 850);

  try {
    await audio.play();
    $('#musicToggle').textContent = '♫';
    $('#musicToggle').classList.add('playing');
  } catch {
    $('#musicToggle').textContent = '♪';
  }
});

$('#musicToggle').addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      $('#musicToggle').classList.add('playing');
    } catch {}
  } else {
    audio.pause();
    $('#musicToggle').classList.remove('playing');
  }
});

let touchX = null;

$('#carousel').addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;
}, { passive: true });

$('#carousel').addEventListener('touchend', e => {
  if (touchX === null) return;

  const dx = e.changedTouches[0].clientX - touchX;

  if (Math.abs(dx) > 35) {
    dx > 0 ? prev() : next();
  }

  touchX = null;
}, { passive: true });

function countdown() {
  let ms = Math.max(0, start.getTime() - Date.now());

  const d = Math.floor(ms / 86400000);
  const h = Math.floor(ms / 3600000) % 24;
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;

  [['d', d], ['h', h], ['m', m], ['s', s]].forEach(([k, v]) => {
    $('#cd-' + k).textContent = String(v).padStart(2, '0');
  });
}

countdown();
setInterval(countdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('shown');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el =>
  observer.observe(el)
);
