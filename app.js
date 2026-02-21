/* =============================================
   Telegram Mini App вЂ” v2 with Catalog
   ============================================= */

(function () {
  'use strict';

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // CATALOG DATA вЂ” рџ”Ѕ РґРѕР±Р°РІСЊС‚Рµ / Р·Р°РјРµРЅРёС‚Рµ СЃРµСЂРёР°Р»С‹
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  const CATALOG = [
    {
      id: 'stranger-things',
      title: 'Stranger Things',
      poster: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      genre: 'Р¤Р°РЅС‚Р°СЃС‚РёРєР°, РЈР¶Р°СЃС‹',
      year: '2016вЂ“2025',
      badge: 'РџРѕРїСѓР»СЏСЂРЅРѕРµ',
      description: 'Р“СЂСѓРїРїР° РґРµС‚РµР№ СЃС‚Р°Р»РєРёРІР°РµС‚СЃСЏ СЃРѕ СЃРІРµСЂС…СЉРµСЃС‚РµСЃС‚РІРµРЅРЅС‹РјРё СЃРёР»Р°РјРё РІ РјР°Р»РµРЅСЊРєРѕРј РіРѕСЂРѕРґРєРµ РҐРѕСѓРєРёРЅСЃ.',
      seasons: [
        {
          title: 'РЎРµР·РѕРЅ 1',
          episodes: [
            { num: 1, title: 'Р“Р»Р°РІР° РїРµСЂРІР°СЏ: РСЃС‡РµР·РЅРѕРІРµРЅРёРµ РЈРёР»Р»Р° Р‘Р°Р№РµСЂСЃР°', duration: '48 РјРёРЅ', desc: 'Р’ РјР°Р»РµРЅСЊРєРѕРј РіРѕСЂРѕРґРєРµ РҐРѕСѓРєРёРЅСЃ Р±РµСЃСЃР»РµРґРЅРѕ РёСЃС‡РµР·Р°РµС‚ РјР°Р»СЊС‡РёРє.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Р“Р»Р°РІР° РІС‚РѕСЂР°СЏ: Р§СѓРґР°С‡РєР° РЅР° РњСЌР№РїР»-СЃС‚СЂРёС‚', duration: '55 РјРёРЅ', desc: 'РњР°Р»СЊС‡РёРєРё РЅР°С…РѕРґСЏС‚ РІ Р»РµСЃСѓ СЃС‚СЂР°РЅРЅСѓСЋ РґРµРІРѕС‡РєСѓ СЃ Р±СЂРёС‚РѕР№ РіРѕР»РѕРІРѕР№.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            { num: 3, title: 'Р“Р»Р°РІР° С‚СЂРµС‚СЊСЏ: РҐРѕР»Р»Рё, Р”Р¶РѕР»Р»Рё', duration: '51 РјРёРЅ', desc: 'РќСЌРЅСЃРё Рё Р”Р¶РѕРЅР°С‚Р°РЅ РЅР°С‡РёРЅР°СЋС‚ СЃРІРѕРµ СЂР°СЃСЃР»РµРґРѕРІР°РЅРёРµ.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          ]
        },
        {
          title: 'РЎРµР·РѕРЅ 2',
          episodes: [
            { num: 1, title: 'Р“Р»Р°РІР° РїРµСЂРІР°СЏ: Р‘РµР·СѓРјРЅС‹Р№ РњР°РєСЃ', duration: '48 РјРёРЅ', desc: 'Р§РµСЂРµР· РіРѕРґ РїРѕСЃР»Рµ СЃРѕР±С‹С‚РёР№ РїРµСЂРІРѕРіРѕ СЃРµР·РѕРЅР°, РІ РіРѕСЂРѕРґРµ РїРѕСЏРІР»СЏРµС‚СЃСЏ РЅРѕРІР°СЏ СѓС‡РµРЅРёС†Р°.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Р“Р»Р°РІР° РІС‚РѕСЂР°СЏ: РџРѕРїСЂРѕС€Р°Р№РєР°', duration: '52 РјРёРЅ', desc: 'РЈРёР»Р» РІРёРґРёС‚ СѓР¶Р°СЃР°СЋС‰РёРµ РІРµС‰Рё РёР· РР·РЅР°РЅРєРё.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          ]
        }
      ]
    },
    {
      id: 'wednesday',
      title: 'РЈСЌРЅСЃРґСЌР№',
      poster: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      genre: 'РљРѕРјРµРґРёСЏ, РњРёСЃС‚РёРєР°',
      year: '2022вЂ“РЅ.РІ.',
      badge: 'РќРѕРІРёРЅРєР°',
      description: 'РЈСЌРЅСЃРґСЌР№ РђРґРґР°РјСЃ СЂР°СЃСЃР»РµРґСѓРµС‚ СЃРµСЂРёСЋ СѓР±РёР№СЃС‚РІ РІ РђРєР°РґРµРјРёРё РќРµРІРµСЂРјРѕСЂ.',
      seasons: [
        {
          title: 'РЎРµР·РѕРЅ 1',
          episodes: [
            { num: 1, title: 'Р“Р»Р°РІР° I: Р’СЂРµРјСЏ РїРѕС‚СЂРѕС€РёС‚СЊ', duration: '45 РјРёРЅ', desc: 'РЈСЌРЅСЃРґСЌР№ РѕС‚РїСЂР°РІР»СЏСЋС‚ РІ РђРєР°РґРµРјРёСЋ РќРµРІРµСЂРјРѕСЂ РїРѕСЃР»Рµ РёРЅС†РёРґРµРЅС‚Р° РІ С€РєРѕР»Рµ.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Р“Р»Р°РІР° II: Р“РѕСЂРµ РѕС‚ СѓРјР°', duration: '47 РјРёРЅ', desc: 'РЈСЌРЅСЃРґСЌР№ РїС‹С‚Р°РµС‚СЃСЏ СЂР°Р·РіР°РґР°С‚СЊ С‚Р°Р№РЅС‹ РќРµРІРµСЂРјРѕСЂР°.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
            { num: 3, title: 'Р“Р»Р°РІР° III: Р”СЂСѓРі РёР»Рё РЅРµРґСЂСѓРі', duration: '50 РјРёРЅ', desc: 'РЈСЌРЅСЃРґСЌР№ РЅР°С…РѕРґРёС‚ СЃРѕСЋР·РЅРёРєР° РІ РЅРµРѕР¶РёРґР°РЅРЅРѕРј РјРµСЃС‚Рµ.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          ]
        }
      ]
    },
    {
      id: 'squid-game',
      title: 'РРіСЂР° РІ РєР°Р»СЊРјР°СЂР°',
      poster: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
      genre: 'РўСЂРёР»Р»РµСЂ, Р”СЂР°РјР°',
      year: '2021вЂ“РЅ.РІ.',
      badge: 'РўРѕРї-10',
      description: 'РЎРѕС‚РЅРё Р»СЋРґРµР№ РІ С‚СЏР¶С‘Р»РѕРј С„РёРЅР°РЅСЃРѕРІРѕРј РїРѕР»РѕР¶РµРЅРёРё РїСЂРёРЅРёРјР°СЋС‚ РїСЂРёРіР»Р°С€РµРЅРёРµ РЅР° Р·Р°РіР°РґРѕС‡РЅСѓСЋ РёРіСЂСѓ.',
      seasons: [
        {
          title: 'РЎРµР·РѕРЅ 1',
          episodes: [
            { num: 1, title: 'Р Р°Р·, РґРІР°, С‚СЂРё вЂ” С‚Р°РіР°РґРё', duration: '60 РјРёРЅ', desc: 'Р“Рё РҐСѓРЅ СѓР·РЅР°С‘С‚ Рѕ С‚Р°РёРЅСЃС‚РІРµРЅРЅРѕРј РёРіСЂРѕРІРѕРј СЃРѕСЂРµРІРЅРѕРІР°РЅРёРё.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'РђРґ', duration: '62 РјРёРЅ', desc: 'РРіСЂРѕРєРё РіРѕР»РѕСЃСѓСЋС‚, СЃС‚РѕРёС‚ Р»Рё РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РёРіСЂСѓ.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          ]
        }
      ]
    },
    {
      id: 'muhtesem-yuzyil',
      title: 'Р’РµР»РёРєРѕР»РµРїРЅС‹Р№ РІРµРє',
      poster: 'https://image.tmdb.org/t/p/w500/UDvmQWnmIr9U6ZRB1k9ULXBow3.jpg',
      genre: 'Р”СЂР°РјР°, РСЃС‚РѕСЂРёС‡РµСЃРєРёР№',
      year: '2011вЂ“2014',
      badge: 'РќРѕРІРёРЅРєР°',
      description: 'РСЃС‚РѕСЂРёСЏ Р»СЋР±РІРё СЃСѓР»С‚Р°РЅР° РЎСѓР»РµР№РјР°РЅР° Р’РµР»РёРєРѕР»РµРїРЅРѕРіРѕ Рё РҐСЋСЂСЂРµРј РЎСѓР»С‚Р°РЅ, РєРѕС‚РѕСЂР°СЏ РёР·РјРµРЅРёР»Р° С…РѕРґ РёСЃС‚РѕСЂРёРё РћСЃРјР°РЅСЃРєРѕР№ РёРјРїРµСЂРёРё.',
      seasons: [
        {
          title: 'РЎРµР·РѕРЅ 1',
          episodes: [
            { num: 1, title: 'РЎРµСЂРёСЏ 1', duration: '120 РјРёРЅ', desc: 'РќР°С‡Р°Р»Рѕ РїСЂР°РІР»РµРЅРёСЏ СЃСѓР»С‚Р°РЅР° РЎСѓР»РµР№РјР°РЅР° Рё РїРѕСЏРІР»РµРЅРёРµ РђР»РµРєСЃР°РЅРґСЂС‹ (РҐСЋСЂСЂРµРј) РІРѕ РґРІРѕСЂС†Рµ.', videoSrc: 'gdrive:1uuwJkFKFIY9Mrhq9cIdFc8D_RYh4zDpe' },
          ]
        }
      ]
    },
    {
      id: 'dark',
      title: 'РўСЊРјР° (Dark)',
      poster: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
      genre: 'Р¤Р°РЅС‚Р°СЃС‚РёРєР°, РўСЂРёР»Р»РµСЂ',
      year: '2017вЂ“2020',
      description: 'РСЃС‡РµР·РЅРѕРІРµРЅРёРµ РґРµС‚РµР№ СЂР°СЃРєСЂС‹РІР°РµС‚ С‚Р°Р№РЅС‹ С‡РµС‚С‹СЂС‘С… СЃРµРјРµР№ Рё РІСЂРµРјРµРЅРЅРѕР№ РїРµС‚Р»Рё, РѕС…РІР°С‚С‹РІР°СЋС‰РµР№ С‚СЂРё РїРѕРєРѕР»РµРЅРёСЏ.',
      seasons: [
        {
          title: 'РЎРµР·РѕРЅ 1',
          episodes: [
            { num: 1, title: 'РЎРµРєСЂРµС‚С‹', duration: '51 РјРёРЅ', desc: 'РџРѕСЃР»Рµ РїСЂРѕРїР°Р¶Рё СЂРµР±С‘РЅРєР° Р¶РёС‚РµР»Рё Р’РёРЅРґРµРЅР° РЅР°С‡РёРЅР°СЋС‚ СЂР°СЃРєСЂС‹РІР°С‚СЊ С‚Р°Р№РЅС‹ РїСЂРѕС€Р»РѕРіРѕ.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
            { num: 2, title: 'Р›РѕР¶СЊ', duration: '44 РјРёРЅ', desc: 'Р Р°СЃСЃР»РµРґРѕРІР°РЅРёРµ РїРѕР»РёС†РёРё РЅР°С‚С‹РєР°РµС‚СЃСЏ РЅР° СЃС‚СЂР°РЅРЅС‹Рµ СѓР»РёРєРё.', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
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

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // STATE
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  let currentSeries  = null;
  let currentSeason   = 0;
  let currentEpisode  = null;
  let adTimer         = null;
  let controlsTimeout = null;

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // DOM
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const screens = {
    catalog: $('#catalog'),
    series:  $('#series-screen'),
    ad:      $('#ad-screen'),
    player:  $('#player-screen'),
  };

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // TELEGRAM INTEGRATION
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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
    console.log('[TG] Not inside Telegram вЂ” browser mode.');
    return false;
  }

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // SCREEN NAV
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  function showScreen(screen) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
  }

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // 1. CATALOG
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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
          <div class="card-meta">${series.genre} В· ${series.year}</div>
          ${series.badge ? `<span class="card-badge">${series.badge}</span>` : ''}
        </div>`;
      card.addEventListener('click', () => openSeries(series));
      grid.appendChild(card);
    });
  }

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // 2. SERIES PAGE
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  function openSeries(series) {
    currentSeries = series;
    currentSeason = 0;

    const hero = $('#series-hero');
    hero.style.backgroundImage = `url('${series.poster}')`;
    $('#s-title').textContent = series.title;
    $('#s-meta').textContent = `${series.genre} В· ${series.year}`;
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

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // 3. AD COUNTDOWN
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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
          ? `РџСЂРѕРїСѓСЃРє С‡РµСЂРµР· ${remaining} СЃРµРє`
          : 'РџРµСЂРµС…РѕРґвЂ¦';
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

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // 4. VIDEO PLAYER (with mobile fullscreen fix)
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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
    $('#player-bar-title').textContent = `${currentSeries.title} В· РЎ${currentSeason + 1}`;
    $('#ep-title').textContent = `РЎРµСЂРёСЏ ${ep.num}: ${ep.title}`;
    $('#ep-meta').textContent = `${currentSeries.seasons[currentSeason].title} В· ${ep.duration}`;
    $('#ep-desc').textContent = ep.desc;

    if (isGDrive(ep.videoSrc)) {
      // Google Drive вЂ” use iframe embed player
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

    // Regular video вЂ” use HTML5 player
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

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // EVENT BINDINGS
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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

  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
  // INIT
  // в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
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
