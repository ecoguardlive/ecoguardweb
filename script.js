/* ============================================================
   EcoGuard · script.js
   Requires: data.js loaded before this file
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. SCROLL REVEAL ──────────────────────────────────── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ── 2. TOPBAR SCROLL OPACITY ──────────────────────────── */
  const topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    if (!topbar) return;
    topbar.style.background = window.scrollY > 40
      ? 'rgba(10,18,35,0.97)'
      : 'rgba(10,18,35,0.82)';
  }, { passive: true });


  /* ── 3. THEME TOGGLE ───────────────────────────────────── */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }

  /* ── 3.1. MOBILE APP CTA HANDLER ─────────────────────────── */
  const mobileAppLink = document.getElementById('mobile-app-link');
  if (mobileAppLink) {
    mobileAppLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Still In Development');
    });
  }


  /* ── 4. CAROUSEL ───────────────────────────────────────── */
  const track  = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');

  if (track && dotsEl && TESTIMONIALS.length) {
    /* Render testimonial cards from data */
    track.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars" aria-label="5 stars">★★★★★</div>
        <p class="testimonial-text">${t.quote}</p>
        <div class="testimonial-author">
          <div class="author-avatar" aria-hidden="true">${t.initials}</div>
          <div>
            <strong>${t.name}</strong>
            <span>${t.title}</span>
          </div>
        </div>
      </div>
    `).join('');

    const cardEls = Array.from(track.children);
    let cur = 0;
    let autoTimer;

    /* Build dots */
    cardEls.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Testimonial ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function goTo(n) {
      cur = (n + cardEls.length) % cardEls.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dotsEl.querySelectorAll('button').forEach((d, i) =>
        d.classList.toggle('active', i === cur)
      );
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(cur + 1), 5200);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    document.getElementById('carousel-prev')?.addEventListener('click', () => goTo(cur - 1));
    document.getElementById('carousel-next')?.addEventListener('click', () => goTo(cur + 1));

    const carouselEl = track.closest('.testimonial-carousel');
    carouselEl?.addEventListener('mouseenter', stopAuto);
    carouselEl?.addEventListener('mouseleave', startAuto);

    startAuto();
  }


  /* ── 5. ZONE CARDS (Backend section) ──────────────────── */
  const backendGrid = document.getElementById('backendGrid');

  if (backendGrid && typeof ZONES !== 'undefined') {
    backendGrid.innerHTML = '';

    ZONES.forEach(z => {
      const safeId = z.id.replace(' ', '');
      const isAlert = z.status === 'alert';
      const card = document.createElement('div');
      card.className = 'zone-card' + (isAlert ? ' alert-card' : '');
      card.innerHTML = `
        <div class="zone-top">
          <span class="zone-id">${z.id}</span>
          <span class="tag${isAlert ? ' alert' : ''}">${isAlert ? 'LEAK ALERT' : 'NORMAL'}</span>
        </div>
        <div class="zone-pressure" id="p-${safeId}">
          ${z.pressure}<small class="zone-unit">PSI</small>
        </div>
        <div class="zone-label">${z.eng}</div>
        <div class="zone-bar">
          <div class="zone-bar-fill${isAlert ? ' danger' : ''}"
               style="width:0%"
               data-pct="${z.pct}">
          </div>
        </div>`;
      backendGrid.appendChild(card);
    });

    /* Animate pressure bars when section enters viewport */
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.zone-bar-fill').forEach(b => {
            b.style.width = b.dataset.pct + '%';
          });
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    barObs.observe(backendGrid);

    /* Simulate live pressure jitter every 2.6 s */
    setInterval(() => {
      ZONES.forEach(z => {
        if (z.status === 'alert') return;
        const jitter = Math.round((Math.random() - 0.5) * 6);
        const el = document.getElementById('p-' + z.id.replace(' ', ''));
        if (el) {
          el.innerHTML = `${z.pressure + jitter}<small class="zone-unit">PSI</small>`;
        }
      });
    }, 2600);
  }


  /* ── 6. TEAM GRID ──────────────────────────────────────── */
  const teamGrid = document.getElementById('teamGrid');

  if (teamGrid && typeof TEAM !== 'undefined') {
    teamGrid.innerHTML = TEAM.map(m => `
      <div class="member">
        <div class="role">${m.role}</div>
        <h4>${m.name}</h4>
        <p>${m.bio}</p>
      </div>
    `).join('');
  }


  /* ── 7. COMPANY THEMES ─────────────────────────────────── */
  const companiesEl = document.getElementById('companies');

  if (companiesEl && typeof COMPANIES !== 'undefined') {
    companiesEl.innerHTML = COMPANIES.map((c, i) => `
      <article class="company-theme reveal" style="transition-delay:${i * 0.1}s;">
        <div class="top">
          <div>
            <h3>${c.name}</h3>
            <span>${c.subtitle}</span>
          </div>
          <div class="swatch" style="background:${c.color};" aria-hidden="true"></div>
        </div>
        <p>${c.desc}</p>
        <ul>
          ${c.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </article>
    `).join('');

    /* Re-observe any newly added .reveal elements */
    companiesEl.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }

});
