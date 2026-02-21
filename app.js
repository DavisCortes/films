/* =============================================
   Telegram Mini App — Application Logic
   ============================================= */

(function () {
  'use strict';

  // ───────────────────────────────────────────
  // CONFIG — change these values as needed
  // ───────────────────────────────────────────
  const CONFIG = {
    adDuration: 15,          // seconds for advertisement
    skipAvailableAt: 10,     // seconds remaining when "Skip" hint appears
    controlsHideDelay: 3000, // ms before video controls auto-hide

    // 🔽 REPLACE: Insert your real video URL here
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',

    // 🔽 REPLACE: Insert real poster image URL here
    posterSrc: 'assets/poster.svg',

    // Метаданные эпизода
    episode: {
      badge: 'Новый эпизод',
      title: 'Stranger Things',
      meta: 'Сезон 4 · Серия 9 · 1ч 22м',
      description: 'План Векны наконец раскрыт. Команда готовится к опасному столкновению в Изнанке — где шансы явно не на их стороне.',
    },
  };

  // ───────────────────────────────────────────
  // DOM CACHE
  // ───────────────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const screens = {
    landing:  $('#landing'),
    ad:       $('#ad-screen'),
    player:   $('#player-screen'),
  };

  const els = {
    // Landing
    posterBg:     $('.poster-bg'),
    badge:        $('.landing-content .badge'),
    title:        $('.landing-content h1'),
    meta:         $('.landing-content .meta'),
    desc:         $('.landing-content .description'),
    btnWatch:     $('#btn-watch'),

    // Ad
    ringFg:       $('.ring-fg'),
    ringText:     $('.ring-text'),
    adSkip:       $('.ad-skip'),

    // Player
    video:        $('#video'),
    playOverlay:  $('.play-overlay'),
    controls:     $('.controls'),
    progressCont: $('.progress-bar-container'),
    progressBar:  $('.progress-bar'),
    btnPlay:      $('#btn-play'),
    btnFullscreen:$('#btn-fullscreen'),
    timeDisplay:  $('.time-display'),

    // Episode info
    epTitle:      $('.episode-info h2'),
    epMeta:       $('.episode-info .ep-meta'),
    epDesc:       $('.episode-info .ep-desc'),
  };

  // ───────────────────────────────────────────
  // TELEGRAM INTEGRATION
  // ───────────────────────────────────────────
  function initTelegram() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      // Expand the Mini App to full height
      tg.expand();

      // Set header color to match dark theme
      try { tg.setHeaderColor('#0d0d0d'); } catch (_) {}
      try { tg.setBackgroundColor('#0d0d0d'); } catch (_) {}

      // Signal that the app is ready
      tg.ready();

      // Log user info
      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user;
        console.log('[TG] User ID:', user.id);
        console.log('[TG] Username:', user.username);
        console.log('[TG] Name:', user.first_name, user.last_name || '');
      } else {
        console.log('[TG] No user data available (opened outside Telegram or bot not configured).');
      }

      console.log('[TG] Platform:', tg.platform);
      console.log('[TG] Version:', tg.version);
      return true;
    }

    console.log('[TG] Telegram WebApp API not detected — running in standalone browser mode.');
    return false;
  }

  // ───────────────────────────────────────────
  // POPULATE LANDING SCREEN
  // ───────────────────────────────────────────
  function populateLanding() {
    const ep = CONFIG.episode;
    els.badge.textContent = ep.badge;
    els.title.textContent = ep.title;
    els.meta.textContent  = ep.meta;
    els.desc.textContent  = ep.description;

    // Set poster background
    els.posterBg.style.backgroundImage = `url('${CONFIG.posterSrc}')`;
  }

  // ───────────────────────────────────────────
  // SCREEN TRANSITIONS
  // ───────────────────────────────────────────
  function showScreen(screen) {
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    screen.classList.add('active');
  }

  // ───────────────────────────────────────────
  // AD COUNTDOWN
  // ───────────────────────────────────────────
  let adTimer = null;

  function startAd() {
    showScreen(screens.ad);

    let remaining = CONFIG.adDuration;
    const circumference = 2 * Math.PI * 32; // r=32
    els.ringFg.style.strokeDasharray = circumference;

    function updateRing() {
      const progress = 1 - remaining / CONFIG.adDuration;
      els.ringFg.style.strokeDashoffset = circumference * (1 - progress);
    }

    function tick() {
      els.ringText.textContent = remaining;
      updateRing();

      // Show skip hint when threshold reached
      if (remaining <= CONFIG.skipAvailableAt) {
        els.adSkip.classList.add('visible');
        els.adSkip.textContent = remaining > 0
          ? `Пропуск через ${remaining} сек`
          : 'Переход…';
      }

      if (remaining <= 0) {
        clearInterval(adTimer);
        adTimer = null;
        transitionToPlayer();
        return;
      }
      remaining--;
    }

    // Initial state
    els.ringFg.style.strokeDashoffset = circumference;
    els.adSkip.classList.remove('visible');
    tick();
    adTimer = setInterval(tick, 1000);
  }

  // ───────────────────────────────────────────
  // TRANSITION TO VIDEO PLAYER
  // ───────────────────────────────────────────
  function transitionToPlayer() {
    // Fade out ad, then show player
    screens.ad.classList.add('fade-out');

    setTimeout(() => {
      screens.ad.classList.remove('fade-out');
      showScreen(screens.player);
      initPlayer();
    }, 500);
  }

  // ───────────────────────────────────────────
  // VIDEO PLAYER
  // ───────────────────────────────────────────
  let controlsTimeout = null;

  function initPlayer() {
    const video = els.video;

    // 🔽 REPLACE: Set your real video source here
    video.src = CONFIG.videoSrc;

    // Populate episode info below video
    const ep = CONFIG.episode;
    els.epTitle.textContent = ep.title;
    els.epMeta.textContent  = ep.meta;
    els.epDesc.textContent  = ep.description;

    // Auto-play after ad
    video.play().catch(() => {
      // Autoplay blocked — show overlay
      els.playOverlay.classList.remove('hidden');
    });

    // If play starts, hide overlay
    video.addEventListener('play', () => {
      els.playOverlay.classList.add('hidden');
      updatePlayIcon(true);
      scheduleHideControls();
    });

    video.addEventListener('pause', () => {
      updatePlayIcon(false);
      showControls();
    });

    video.addEventListener('ended', () => {
      updatePlayIcon(false);
      els.playOverlay.classList.remove('hidden');
      showControls();
    });

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateProgress);
  }

  // Play / Pause toggle
  function togglePlay() {
    const video = els.video;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  function updatePlayIcon(playing) {
    els.btnPlay.innerHTML = playing
      ? '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
      : '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>';
  }

  // Progress bar
  function updateProgress() {
    const v = els.video;
    if (!v.duration) return;
    const pct = (v.currentTime / v.duration) * 100;
    els.progressBar.style.width = pct + '%';
    els.timeDisplay.textContent = formatTime(v.currentTime) + ' / ' + formatTime(v.duration);
  }

  function seekTo(e) {
    const rect = els.progressCont.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    els.video.currentTime = pct * els.video.duration;
  }

  // Fullscreen
  function toggleFullscreen() {
    const container = $('.video-container');
    if (!document.fullscreenElement) {
      (container.requestFullscreen || container.webkitRequestFullscreen || container.msRequestFullscreen).call(container);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);
    }
  }

  // Controls visibility
  function showControls() {
    els.controls.classList.remove('hidden');
    scheduleHideControls();
  }

  function scheduleHideControls() {
    clearTimeout(controlsTimeout);
    if (!els.video.paused) {
      controlsTimeout = setTimeout(() => {
        els.controls.classList.add('hidden');
      }, CONFIG.controlsHideDelay);
    }
  }

  // Time formatter
  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ───────────────────────────────────────────
  // EVENT BINDINGS
  // ───────────────────────────────────────────
  function bindEvents() {
    // Landing → Ad
    els.btnWatch.addEventListener('click', startAd);

    // Player controls
    els.btnPlay.addEventListener('click', togglePlay);
    els.playOverlay.addEventListener('click', togglePlay);
    els.btnFullscreen.addEventListener('click', toggleFullscreen);
    els.progressCont.addEventListener('click', seekTo);

    // Tap on video container to toggle controls
    $('.video-container').addEventListener('click', (e) => {
      if (e.target === els.video) {
        if (els.controls.classList.contains('hidden')) {
          showControls();
        } else {
          els.controls.classList.add('hidden');
        }
      }
    });
  }

  // ───────────────────────────────────────────
  // INIT
  // ───────────────────────────────────────────
  function init() {
    initTelegram();
    populateLanding();
    bindEvents();
    showScreen(screens.landing);
    console.log('[App] Mini App initialized.');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
