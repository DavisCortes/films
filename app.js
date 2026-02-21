/* =============================================
   Telegram Mini App — v2 with Catalog
   ============================================= */

(function () {
  'use strict';

  // ───────────────────────────────────────────
  // CATALOG DATA — 🔽 добавьте / замените сериалы
  // ───────────────────────────────────────────
  const CATALOG = [
    {
      id: 'stranger-things',
      title: 'Stranger Things',
      poster: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      genre: 'Фантастика, Ужасы',
      year: '2016–2025',
      badge: 'Популярное',
      description: 'Группа детей сталкивается со сверхъестественными силами в маленьком городке Хоукинс.',
      seasons: [
        {
          title: 'Сезон 1',
          episodes: [
            { num: 1, title: 'Глава первая: Исчезновение Уилла Байерса', duration: '48 мин', desc: 'В маленьком городке Хоукинс бесследно исчезает мальчик.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Глава вторая: Чудачка на Мэйпл-стрит', duration: '55 мин', desc: 'Мальчики находят в лесу странную девочку с бритой головой.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            { num: 3, title: 'Глава третья: Холли, Джолли', duration: '51 мин', desc: 'Нэнси и Джонатан начинают свое расследование.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          ]
        },
        {
          title: 'Сезон 2',
          episodes: [
            { num: 1, title: 'Глава первая: Безумный Макс', duration: '48 мин', desc: 'Через год после событий первого сезона, в городе появляется новая ученица.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Глава вторая: Попрошайка', duration: '52 мин', desc: 'Уилл видит ужасающие вещи из Изнанки.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          ]
        }
      ]
    },
    {
      id: 'wednesday',
      title: 'Уэнсдэй',
      poster: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      genre: 'Комедия, Мистика',
      year: '2022–н.в.',
      badge: 'Новинка',
      description: 'Уэнсдэй Аддамс расследует серию убийств в Академии Невермор.',
      seasons: [
        {
          title: 'Сезон 1',
          episodes: [
            { num: 1, title: 'Глава I: Время потрошить', duration: '45 мин', desc: 'Уэнсдэй отправляют в Академию Невермор после инцидента в школе.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Глава II: Горе от ума', duration: '47 мин', desc: 'Уэнсдэй пытается разгадать тайны Невермора.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            { num: 3, title: 'Глава III: Друг или недруг', duration: '50 мин', desc: 'Уэнсдэй находит союзника в неожиданном месте.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          ]
        }
      ]
    },
    {
      id: 'squid-game',
      title: 'Игра в кальмара',
      poster: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
      genre: 'Триллер, Драма',
      year: '2021–н.в.',
      badge: 'Топ-10',
      description: 'Сотни людей в тяжёлом финансовом положении принимают приглашение на загадочную игру.',
      seasons: [
        {
          title: 'Сезон 1',
          episodes: [
            { num: 1, title: 'Раз, два, три — тагади', duration: '60 мин', desc: 'Ги Хун узнаёт о таинственном игровом соревновании.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Ад', duration: '62 мин', desc: 'Игроки голосуют, стоит ли продолжать игру.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          ]
        }
      ]
    },
    {
      id: 'muhtesem-yuzyil',
      title: 'Великолепный век',
      poster: 'https://image.tmdb.org/t/p/w500/UDvmQWnmIr9U6ZRB1k9ULXBow3.jpg',
      genre: 'Драма, Исторический',
      year: '2011–2014',
      badge: 'Новинка',
      description: 'История любви султана Сулеймана Великолепного и Хюррем Султан, которая изменила ход истории Османской империи.',
      seasons: [
        {
          title: 'Сезон 1',
          episodes: [
            { num: 1, title: 'Серия 1', duration: '120 мин', desc: 'Начало правления султана Сулеймана и появление Александры (Хюррем) во дворце.', videoSrc: 'gdrive:1uuwJkFKFIY9Mrhq9cIdFc8D_RYh4zDpe' },
          ]
        }
      ]
    },
    {
      id: 'dark',
      title: 'Тьма (Dark)',
      poster: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
      genre: 'Фантастика, Триллер',
      year: '2017–2020',
      description: 'Исчезновение детей раскрывает тайны четырёх семей и временной петли, охватывающей три поколения.',
      seasons: [
        {
          title: 'Сезон 1',
          episodes: [
            { num: 1, title: 'Секреты', duration: '51 мин', desc: 'После пропажи ребёнка жители Виндена начинают раскрывать тайны прошлого.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Ложь', duration: '44 мин', desc: 'Расследование полиции натыкается на странные улики.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          ]
        }
      ]
    },
  ];

  const CONFIG = {
    adDuration: 15,
    skipAvailableAt: 10,
    controlsHideDelay: 3000,
  };

  // ───────────────────────────────────────────
  // STATE
  // ───────────────────────────────────────────
  let currentSeries  = null;
  let currentSeason   = 0;
  let currentEpisode  = null;
  let adTimer         = null;
  let controlsTimeout = null;

  // ───────────────────────────────────────────
  // DOM
  // ───────────────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const screens = {
    catalog: $('#catalog'),
    series:  $('#series-screen'),
    ad:      $('#ad-screen'),
    player:  $('#player-screen'),
  };

  // ───────────────────────────────────────────
  // TELEGRAM INTEGRATION
  // ───────────────────────────────────────────
  function initTelegram() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      try { tg.setHeaderColor('#0d0d0d'); } catch (_) {}
      try { tg.setBackgroundColor('#0d0d0d'); } catch (_) {}
      tg.ready();

      if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const u = tg.initDataUnsafe.user;
        console.log('[TG] User:', u.id, u.first_name, u.username || '');
      }
      return true;
    }
    console.log('[TG] Not inside Telegram — browser mode.');
    return false;
  }

  // ───────────────────────────────────────────
  // SCREEN NAV
  // ───────────────────────────────────────────
  function showScreen(screen) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
  }

  // ───────────────────────────────────────────
  // 1. CATALOG
  // ───────────────────────────────────────────
  function renderCatalog() {
    const grid = $('#catalog-grid');
    grid.innerHTML = '';

    CATALOG.forEach(series => {
      const card = document.createElement('div');
      card.className = 'catalog-card';
      card.innerHTML = `
        <div class="catalog-card-poster" style="background-image:url('${series.poster}')"></div>
        <div class="catalog-card-body">
          <h3>${series.title}</h3>
          <div class="card-meta">${series.genre} · ${series.year}</div>
          ${series.badge ? `<span class="card-badge">${series.badge}</span>` : ''}
        </div>`;
      card.addEventListener('click', () => openSeries(series));
      grid.appendChild(card);
    });
  }

  // ───────────────────────────────────────────
  // 2. SERIES PAGE
  // ───────────────────────────────────────────
  function openSeries(series) {
    currentSeries = series;
    currentSeason = 0;

    const hero = $('#series-hero');
    hero.style.backgroundImage = `url('${series.poster}')`;
    $('#s-title').textContent = series.title;
    $('#s-meta').textContent = `${series.genre} · ${series.year}`;
    $('#s-desc').textContent = series.description;

    renderSeasonTabs();
    renderEpisodes();
    showScreen(screens.series);
  }

  function renderSeasonTabs() {
    const tabs = $('#season-tabs');
    tabs.innerHTML = '';
    currentSeries.seasons.forEach((season, i) => {
      const btn = document.createElement('button');
      btn.className = 'season-tab' + (i === currentSeason ? ' active' : '');
      btn.textContent = season.title;
      btn.addEventListener('click', () => {
        currentSeason = i;
        $$('.season-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        renderEpisodes();
      });
      tabs.appendChild(btn);
    });
  }

  function renderEpisodes() {
    const list = $('#episodes-list');
    list.innerHTML = '';
    const episodes = currentSeries.seasons[currentSeason].episodes;

    episodes.forEach(ep => {
      const card = document.createElement('div');
      card.className = 'episode-card';
      card.innerHTML = `
        <div class="ep-number">${ep.num}</div>
        <div class="ep-card-info">
          <h4>${ep.title}</h4>
          <div class="ep-card-meta">${ep.duration}</div>
          <div class="ep-card-desc">${ep.desc}</div>
        </div>
        <svg class="ep-play-icon" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>`;
      card.addEventListener('click', () => playEpisode(ep));
      list.appendChild(card);
    });
  }

  // ───────────────────────────────────────────
  // 3. AD COUNTDOWN
  // ───────────────────────────────────────────
  function playEpisode(ep) {
    currentEpisode = ep;
    startAd();
  }

  function startAd() {
    showScreen(screens.ad);
    let remaining = CONFIG.adDuration;
    const circumference = 2 * Math.PI * 32;
    const ringFg = $('.ring-fg');
    const ringText = $('.ring-text');
    const adSkip = $('.ad-skip');

    ringFg.style.strokeDasharray = circumference;
    ringFg.style.strokeDashoffset = circumference;
    adSkip.classList.remove('visible');

    function tick() {
      ringText.textContent = remaining;
      const progress = 1 - remaining / CONFIG.adDuration;
      ringFg.style.strokeDashoffset = circumference * (1 - progress);

      if (remaining <= CONFIG.skipAvailableAt) {
        adSkip.classList.add('visible');
        adSkip.textContent = remaining > 0
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
    tick();
    adTimer = setInterval(tick, 1000);
  }

  function transitionToPlayer() {
    screens.ad.classList.add('fade-out');
    setTimeout(() => {
      screens.ad.classList.remove('fade-out');
      showScreen(screens.player);
      initPlayer();
    }, 500);
  }

  // ───────────────────────────────────────────
  // 4. VIDEO PLAYER (with mobile fullscreen fix)
  // ───────────────────────────────────────────
  function isGDrive(src) {
    return src && src.startsWith('gdrive:');
  }

  function initPlayer() {
    const video    = $('#video');
    const iframe   = $('#gdrive-player');
    const overlay  = $('#play-overlay');
    const controls = $('#controls');
    const ep       = currentEpisode;

    // Episode info
    $('#player-bar-title').textContent = `${currentSeries.title} · С${currentSeason + 1}`;
    $('#ep-title').textContent = `Серия ${ep.num}: ${ep.title}`;
    $('#ep-meta').textContent = `${currentSeries.seasons[currentSeason].title} · ${ep.duration}`;
    $('#ep-desc').textContent = ep.desc;

    if (isGDrive(ep.videoSrc)) {
      // Google Drive — use iframe embed player
      const fileId = ep.videoSrc.replace('gdrive:', '');
      iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;
      iframe.classList.remove('hidden');
      video.classList.add('hidden');
      overlay.classList.add('hidden');
      controls.classList.add('hidden');
      video.removeAttribute('src');
      video.load();
      return;
    }

    // Regular video — use HTML5 player
    iframe.classList.add('hidden');
    iframe.removeAttribute('src');
    video.classList.remove('hidden');
    video.src = ep.videoSrc;

    // Remove old listeners by cloning
    const newVideo = video.cloneNode(true);
    video.parentNode.replaceChild(newVideo, video);
    newVideo.src = ep.videoSrc;

    // Auto-play
    newVideo.play().catch(() => {
      overlay.classList.remove('hidden');
    });

    // Events
    newVideo.addEventListener('play', () => {
      overlay.classList.add('hidden');
      updatePlayIcon(true);
      scheduleHideControls();
    });

    newVideo.addEventListener('pause', () => {
      updatePlayIcon(false);
      showControls();
    });

    newVideo.addEventListener('ended', () => {
      updatePlayIcon(false);
      overlay.classList.remove('hidden');
      showControls();
    });

    newVideo.addEventListener('timeupdate', () => updateProgress(newVideo));
    newVideo.addEventListener('loadedmetadata', () => updateProgress(newVideo));
  }

  function togglePlay() {
    const video = $('#video');
    if (video.paused || video.ended) video.play();
    else video.pause();
  }

  function updatePlayIcon(playing) {
    $('#btn-play').innerHTML = playing
      ? '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
      : '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>';
  }

  function updateProgress(v) {
    if (!v || !v.duration) return;
    const pct = (v.currentTime / v.duration) * 100;
    $('#progress-bar').style.width = pct + '%';
    $('#time-display').textContent = formatTime(v.currentTime) + ' / ' + formatTime(v.duration);
  }

  function seekTo(e) {
    const video = $('#video');
    const rect = $('#progress-container').getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    const pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    video.currentTime = pct * video.duration;
  }

  // ---- FULLSCREEN (mobile-compatible) ----
  function toggleFullscreen() {
    const video     = $('#video');
    const container = $('#video-container');

    // iOS Safari: use native video fullscreen
    if (video.webkitEnterFullscreen) {
      if (video.webkitDisplayingFullscreen) {
        video.webkitExitFullscreen();
      } else {
        video.webkitEnterFullscreen();
      }
      return;
    }

    // Android Chrome / Desktop: use Fullscreen API on container
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else {
      const fn = container.requestFullscreen || container.webkitRequestFullscreen;
      if (fn) {
        fn.call(container);
      } else {
        // Fallback: CSS fullscreen
        container.classList.toggle('is-fullscreen');
      }
    }
  }

  // Listen for fullscreen changes to update CSS class
  document.addEventListener('fullscreenchange', handleFsChange);
  document.addEventListener('webkitfullscreenchange', handleFsChange);
  function handleFsChange() {
    const container = $('#video-container');
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      container.classList.add('is-fullscreen');
      // Lock to landscape if possible
      try { screen.orientation.lock('landscape').catch(() => {}); } catch(_) {}
    } else {
      container.classList.remove('is-fullscreen');
      try { screen.orientation.unlock(); } catch(_) {}
    }
  }

  // Controls visibility
  function showControls() {
    $('#controls').classList.remove('hidden');
    scheduleHideControls();
  }
  function scheduleHideControls() {
    clearTimeout(controlsTimeout);
    const video = $('#video');
    if (video && !video.paused) {
      controlsTimeout = setTimeout(() => {
        $('#controls').classList.add('hidden');
      }, CONFIG.controlsHideDelay);
    }
  }

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ───────────────────────────────────────────
  // EVENT BINDINGS
  // ───────────────────────────────────────────
  function bindEvents() {
    // Back buttons
    $('#back-catalog').addEventListener('click', () => showScreen(screens.catalog));
    $('#back-series').addEventListener('click', () => {
      const video = $('#video');
      video.pause();
      video.removeAttribute('src');
      video.load();
      showScreen(screens.series);
    });

    // Player controls
    $('#btn-play').addEventListener('click', togglePlay);
    $('#play-overlay').addEventListener('click', togglePlay);
    $('#btn-fullscreen').addEventListener('click', toggleFullscreen);
    $('#progress-container').addEventListener('click', seekTo);
    $('#progress-container').addEventListener('touchstart', seekTo, { passive: true });

    // Tap video to toggle controls
    $('#video-container').addEventListener('click', (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === 'video') {
        const ctrl = $('#controls');
        if (ctrl.classList.contains('hidden')) showControls();
        else ctrl.classList.add('hidden');
      }
    });
  }

  // ───────────────────────────────────────────
  // INIT
  // ───────────────────────────────────────────
  function init() {
    initTelegram();
    renderCatalog();
    bindEvents();
    showScreen(screens.catalog);
    console.log('[App] Mini App v2 initialized.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
