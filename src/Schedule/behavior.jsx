// behavior.js - exposes initSchedule() and cleanupSchedule()
const START_HOUR = 8, END_HOUR = 23, PX_PER_HOUR = 200, ROW_HEIGHT = 56;

const dayEvents = {
  grid1: [
    { start: 18, end: 23, row: 0, color: 'teal', title: 'Inauguration and Comedy Night', loc: 'Add to Calendar' },

  ],
  grid2: [
    { start: 9, end: 17, row: 0, color: 'gold', title: 'PMx Finals', loc: 'Add to Calendar' },
    { start: 17, end: 18, row: 0, color: 'teal', title: 'Ground Zero Workshop', loc: 'Add to Calendar' },
    { start: 18, end: 19, row: 0, color: 'gold', title: 'PMx Results', loc: 'Add to Calendar' },

    { start: 9, end: 14, row: 1, color: 'teal', title: 'Disrupt Finals', loc: 'Add to Calendar' },
    { start: 15, end: 19, row: 1, color: 'teal', title: 'Disrupt Finals', loc: 'Add to Calendar' },

    { start: 9, end: 16, row: 2, color: 'gold', title: 'Northeast Launch Pad', loc: 'Add to Calendar' },

    { start: 9, end: 17, row: 3, color: 'teal', title: 'Encode Finals', loc: 'Add to Calendar' },
    { start: 9, end: 14, row: 4, color: 'gold', title: 'Sparkle', loc: 'Add to Calendar' },

    { start: 12, end: 14, row: 5, color: 'teal', title: 'Grids and Gaps', loc: 'Add to Calendar' },
    { start: 14, end: 15, row: 5, color: 'gold', title: 'Microsoft CTO', loc: 'Add to Calendar' },
    { start: 15, end: 16, row: 5, color: 'teal', title: 'Kiran (Online)', loc: 'Add to Calendar' },
    { start: 16, end: 17, row: 5, color: 'gold', title: 'Kamlesh', loc: 'Add to Calendar' },

    { start: 11, end: 19, row: 6, color: 'gold', title: "Traitor's Gambit (Fun event)", loc: 'Add to Calendar' },

    { start: 13, end: 15, row: 7, color: 'teal', title: "NEC Speaker Session", loc: 'Add to Calendar' },

    { start: 11, end: 18, row: 8, color: 'gold', title: "Hands & Hoax (Fun event) & Monopoly", loc: 'Add to Calendar' },

    { start: 20, end: 23, row: 9, color: 'teal', title: "Spotlight Night", loc: 'Add to Calendar' },
  ],
  grid3: [
    { start: 18, end: 21, row: 0, color: 'teal', title: "Founder's Lab and Closing Ceremony", loc: 'Add to Calendar' },
    { start: 14, end: 19, row: 1, color: 'gold', title: "IPL Auction Finals", loc: 'Add to Calendar' },

    { start: 10, end: 17, row: 2, color: 'teal', title: "NE SustainX ML", loc: 'Add to Calendar' },
    { start: 10, end: 17, row: 3, color: 'gold', title: "NE SustainX Electronics", loc: 'Add to Calendar' },

    { start: 11, end: 19, row: 4, color: 'teal', title: "ERC", loc: 'Add to Calendar' },  
    { start: 10, end: 15, row: 5, color: 'gold', title: "Traitor's Gambit (Fun event)", loc: 'Add to Calendar' },
    { start: 15, end: 18, row: 6, color: 'teal', title: "Antah Prerna", loc: 'Add to Calendar' },  

    { start: 8, end: 18, row: 7, color: 'gold', title: "Startup EXPO", loc: 'Add to Calendar' },

    { start: 12, end: 16, row: 8, color: 'teal', title: "Networking Lunch", loc: 'Add to Calendar' },

    { start: 14, end: 16, row: 9, color: 'gold', title: "NEC", loc: 'Add to Calendar' },
    { start: 16, end: 20, row: 9, color: 'teal', title: "Investor - Incubator Summit", loc: 'Add to Calendar' },
    
    { start: 20, end: 23, row: 10, color: 'gold', title: "DJ Night", loc: 'Add to Calendar' },

    { start: 15, end: 17, row: 11, color: 'teal', title: "Matiks", loc: 'Add to Calendar' },

    { start: 11, end: 18, row: 12, color: 'gold', title: "Escape Room", loc: 'Add to Calendar' },
    
    { start: 17, end: 20, row: 13, color: 'teal', title: "Chai Pe Charcha	", loc: 'Add to Calendar' },

    { start: 11, end: 18, row: 14, color: 'gold', title: "Hands & Hoax(Fun event) & Monopoly", loc: 'Add to Calendar' },
  ]
};

let _listeners = [];
let _map = null;
let _markers = {};
let _activeMarker = null;

function buildGrid(grid, events) {
  if (!grid) return;
  grid.innerHTML = '';
  grid.style.minWidth = ((END_HOUR - START_HOUR) * PX_PER_HOUR) + 'px';

  for (let h = START_HOUR; h <= END_HOUR; h++) {
    const x = (h - START_HOUR) * PX_PER_HOUR;
    grid.insertAdjacentHTML('beforeend',
      `<div class="vline" style="left:${x}px"></div>
       <div class="time" style="left:${x}px">${h > 12 ? h - 12 : h}:00 ${h < 12 ? 'am' : 'pm'}</div>`
    );
  }

  const maxRow = events.length
  ? Math.max(...events.map(ev => ev.row))
  : 0;

const totalRows = maxRow + 1;

// 🔑 set grid height properly
grid.style.height = (totalRows * ROW_HEIGHT + 62) + 'px';

for (let r = 0; r < totalRows; r++) {
  const row = document.createElement('div');
  row.className = 'row';
  row.style.top = (ROW_HEIGHT * r + 56) + 'px';
  grid.appendChild(row);
}

  events.forEach(ev => {
    const e = document.createElement('div');
    e.className = `event ${ev.color}`;
    e.style.left = ((ev.start - START_HOUR) * PX_PER_HOUR + 10) + 'px';
    e.style.width = ((ev.end - ev.start) * PX_PER_HOUR - 16) + 'px';
    e.style.top = (ROW_HEIGHT * ev.row + 62) + 'px';
    e.dataset.title = ev.title.toLowerCase();
    e.dataset.loc = ev.loc.toLowerCase();
    // build inner content; if event is an "Add to Calendar" item, render a link that opens Google Calendar
    const isAddToCal = (ev.loc && ev.loc.toLowerCase().includes('add to cal')) || ev.addToCalendar;
    if (isAddToCal) {
      // map grid id to event date (YYYY, MM, DD)
      const gridDateMap = {
        grid1: [2026, 1, 23],
        grid2: [2026, 1, 24],
        grid3: [2026, 1, 25]
      };
      const gd = gridDateMap[grid.id] || [2026, 1, 23];

      // produce Google Calendar datetime in local (event) timezone format YYYYMMDDTHHMMSS
      function toGCalDate(year, month, day, hourFloat) {
        const hour = Math.floor(hourFloat);
        const minutes = Math.round((hourFloat - hour) * 60);
        const pad = n => String(n).padStart(2, '0');
        return `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minutes)}00`;
      }

      const start = toGCalDate(gd[0], gd[1], gd[2], ev.start);
      const end = toGCalDate(gd[0], gd[1], gd[2], ev.end);
      const title = encodeURIComponent(ev.title || 'Event');
      const details = encodeURIComponent(ev.desc || '');
      // map row index to actual venue names used by the map data
      const venueNames = ['Lecture Halls', 'Conference Hall', 'Hall C', 'Auditorium', 'Core 5','IITG Circle'];
      const locName = venueNames[ev.row] || ev.location || '';
      const location = encodeURIComponent(locName);
      const gcalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${'IITG - ' + location}&sf=true&output=xml&ctz=Asia/Kolkata`;

      e.innerHTML = `<span class="event-title">${ev.title}</span><small><a class="add-to-cal" href="${gcalUrl}" target="_blank" rel="noopener noreferrer">Add to Calendar</a></small>`;
    } else {
      e.innerHTML = `<span class="event-title">${ev.title}</span><small>${ev.loc}</small>`;
    }
    grid.appendChild(e);
  });
}

async function ensureLeaflet() {
  if (window.L) return window.L;

  // add CSS
  if (!document.querySelector('link[data-leaflet]')) {
    const lcss = document.createElement('link');
    lcss.rel = 'stylesheet';
    lcss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    lcss.setAttribute('data-leaflet', '');
    document.head.appendChild(lcss);
  }

  if (!document.querySelector('script[data-leaflet]')) {
    const scr = document.createElement('script');
    scr.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    scr.async = true;
    scr.setAttribute('data-leaflet', '');
    document.body.appendChild(scr);
    await new Promise(res => scr.onload = res);
  }

  return window.L;
}

function setupMap() {
  if (!document.getElementById('realMap')) return;
  const L = window.L;
  if (!_map && L) {
    _map = L.map('realMap', { zoomControl: false }).setView([26.1921, 91.6986], 1);
    L.DomEvent.disableClickPropagation(_map.getContainer());
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(_map);

    const locations = {
      Lecture_Halls: { name: 'Lecture Halls', coords: [26.188874, 91.691424] },
      Conference_Hall: { name: 'Conference Hall', coords: [26.191183, 91.692444] },
      Lakeside_Stalls: { name: 'Lakeside Stalls', coords: [26.190059, 91.693818] },
      Auditorium: { name: 'Auditorium', coords: [26.190939272712182, 91.69306307381973] },
      IITG_Circle: { name: 'IITG_Circle', coords: [26.190204, 91.692979] },
      Core_5: { name: 'Core 5', coords: [26.185735, 91.689432] }
    };

    function pinSVG(color) {
      return `
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 65 65" fill="none">
    <path d="M32.5 4.0625C26.5761 4.06922 20.8968 6.42545 16.708 10.6143C12.5192 14.8031 10.163 20.4824 10.1562 26.4062C10.1562 45.5254 30.4688 59.965 31.3346 60.5693C31.6761 60.8086 32.083 60.9369 32.5 60.9369C32.917 60.9369 33.3239 60.8086 33.6654 60.5693C34.5312 59.965 54.8438 45.5254 54.8438 26.4062C54.837 20.4824 52.4808 14.8031 48.292 10.6143C44.1032 6.42545 38.4239 4.06922 32.5 4.0625ZM32.5 18.2812C34.107 18.2812 35.6779 18.7578 37.014 19.6506C38.3502 20.5433 39.3916 21.8123 40.0065 23.2969C40.6215 24.7816 40.7824 26.4153 40.4689 27.9914C40.1554 29.5675 39.3815 31.0152 38.2452 32.1515C37.1089 33.2878 35.6612 34.0616 34.0851 34.3751C32.509 34.6886 30.8753 34.5277 29.3907 33.9128C27.906 33.2978 26.6371 32.2564 25.7443 30.9203C24.8515 29.5841 24.375 28.0132 24.375 26.4062C24.375 24.2514 25.231 22.1847 26.7548 20.661C28.2785 19.1373 30.3451 18.2812 32.5 18.2812Z"
      fill="${color}"/>
  </svg>`;
    }

    function createPinIcon(color) {
      return L.divIcon({
        html: pinSVG(color),
        className: '',
        iconSize: [42, 42],
        iconAnchor: [21, 42]
      });
    }

    Object.entries(locations).forEach(([key, loc]) => {
      const marker = L.marker(loc.coords, { icon: createPinIcon('#8f8bb3') }).addTo(_map);
      _markers[key] = marker;
      marker.on('click', () => activateLocation(key, locations));
    });

    // after markers created, activate the default location to zoom in
    activateLocation('Auditorium', locations);

    function activateLocation(key, locationsObj) {
      const loc = locationsObj[key];
      const marker = _markers[key];
      if (_activeMarker) {
        _activeMarker.setIcon(createPinIcon('#8f8bb3'));
      }
      marker.setIcon(createPinIcon('#4B0082'));
      _activeMarker = marker;
      currentLoc = key;
      renderMapEvents();
      _map.flyTo(loc.coords, 17.5, { duration: 0.6 });
    }

    // expose renderMapEvents closure
    window.__schedule_locations = { renderMapEvents: renderMapEventsInternal };
  }

    function renderMapEventsInternal() {
      // call outer renderMapEvents so the events list updates when map interacts
      try { renderMapEvents(); } catch (e) {}
    }
}

function renderMapEvents() {
  const list = document.getElementById('mapEventList');
  const title = document.getElementById('locationTitle');
  if (!list || !title) return;
  const data = (mapData[currentLoc] && mapData[currentLoc][currentDay]) || [];
  title.textContent = (mapData[currentLoc] && mapData[currentLoc].name) || '';
  list.innerHTML = data.map(e => `<div class="event-item"><span>${e.t}</span><span>${e.time}</span></div>`).join('');
}

let currentLoc = 'Auditorium', currentDay = 1;

// Hardcoded row -> canonical venue mapping (based on your table)
// grid1 -> day 1, grid2 -> day 2, grid3 -> day 3
const mapData = (() => {
  function fmtTime(hourFloat) {
    const hour = Math.floor(hourFloat);
    const minutes = Math.round((hourFloat - hour) * 60);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = ((hour + 11) % 12) + 1;
    return `${displayHour}:${String(minutes).padStart(2, '0')} ${ampm}`;
  }

  // mapping for grid1 (day0 in your list) — only auditorium
  const grid1Map = { 0: 'Auditorium' };

  // mapping for grid2 (your day1 list) — rows 0..9
  const grid2Map = {
    0: 'Conference_Hall',
    1: 'Conference_Hall',
    2: 'Conference_Hall',
    3: 'Core_5',
    4: 'Core_5',
    5: 'Auditorium', // mini auditorium
    6: 'Lecture_Halls',
    7: 'Lakeside_Stalls', // conference room
    8: 'IITG_Circle',
    9: 'Auditorium',
  };

  // mapping for grid3 (your day2 list) — rows 0..14
  const grid3Map = {
    0: 'Conference_Hall',
    1: 'Conference_Hall',
    2: 'Core_5',
    3: 'Core_5',
    4: 'Core_5',
    5: 'Lecture_Halls',
    6: 'Lecture_Halls',
    7: 'Lakeside_Arena',
    8: 'Conference_Center_Hall',
    9: 'Lakeside_Stalls',
    10: 'Auditorium',
    11: 'Auditorium',
    12: 'Library_Basement',
    13: 'IITG_Circle',
    14: 'IITG_Circle'
  };

  const allKeys = new Set([...Object.values(grid1Map), ...Object.values(grid2Map), ...Object.values(grid3Map)]);
  const md = {};
  allKeys.forEach(k => { md[k] = { name: k.replace(/_/g, ' '), 1: [], 2: [], 3: [] }; });

  Object.entries(dayEvents).forEach(([gridId, events]) => {
    const day = gridId === 'grid1' ? 1 : gridId === 'grid2' ? 2 : 3;
    const mapForGrid = gridId === 'grid1' ? grid1Map : gridId === 'grid2' ? grid2Map : grid3Map;
    (events || []).forEach(ev => {
      const row = typeof ev.row === 'number' ? ev.row : 0;
      const key = mapForGrid[row] || 'Conference_Hall';
      if (!md[key]) md[key] = { name: key.replace(/_/g, ' '), 1: [], 2: [], 3: [] };
      md[key][day].push({ t: ev.title || '', time: fmtTime(ev.start) });
    });
  });

  return md;
})();


function attach(node, event, handler) {
  node && node.addEventListener && node.addEventListener(event, handler);
  _listeners.push([node, event, handler]);
}

function detachAll() {
  _listeners.forEach(([node, event, handler]) => {
    try { node.removeEventListener(event, handler); } catch (e) {}
  });
  _listeners = [];
}

export async function InitSchedule() {
  // start loading Leaflet but don't wait for it — attach UI handlers immediately
  ensureLeaflet().then(() => { try { setupMap(); } catch (e) {} });

  // build grids
  ['grid1', 'grid2', 'grid3'].forEach(id => {
    const el = document.getElementById(id);
    buildGrid(el, dayEvents[id] || []);
  });

  // accordion
  document.querySelectorAll('.day-header').forEach(header => {
    const handler = () => {
      const card = header.closest('.day-card');
      document.querySelectorAll('.day-card').forEach(c => { if (c !== card) c.classList.remove('open'); });
      card.classList.toggle('open');
    };
    attach(header, 'click', handler);
  });

  // scrollbar drag
  document.querySelectorAll('.timeline-wrapper').forEach(w => {
    const sc = w.querySelector('.timeline-scroll');
    const tr = w.querySelector('.fake-scroll');
    const th = w.querySelector('.thumb');
    if (!sc || !tr || !th) return;
    let d = false, x = 0, s = 0;
    const sync = () => {
      const m = sc.scrollWidth - sc.clientWidth;
      th.style.left = m ? (sc.scrollLeft / m) * (tr.clientWidth - th.clientWidth) + 'px' : '0px';
    };
    const onScroll = () => sync();
    const onMouseDown = e => { d = true; x = e.clientX; s = sc.scrollLeft; document.body.style.userSelect = 'none'; e.preventDefault(); };
    const onMouseMove = e => { if (!d) return; sc.scrollLeft = s + (e.clientX - x) / (tr.clientWidth - th.clientWidth) * (sc.scrollWidth - sc.clientWidth); };
    const onMouseUp = () => { d = false; document.body.style.userSelect = ''; };
    attach(sc, 'scroll', onScroll);
    attach(th, 'mousedown', onMouseDown);
    attach(window, 'mousemove', onMouseMove);
    attach(window, 'mouseup', onMouseUp);
    sync();
  });

  // search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const onInput = e => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.event').forEach(ev => ev.classList.remove('highlight'));
      if (!query) return;
      document.querySelectorAll('.event').forEach(ev => {
        if (ev.dataset.title.includes(query) || ev.dataset.loc.includes(query)) {
          ev.classList.add('highlight');
          const dayCard = ev.closest('.day-card');
          document.querySelectorAll('.day-card').forEach(c => c.classList.remove('open'));
          dayCard.classList.add('open');
          dayCard.querySelector('.timeline-wrapper').hidden = false;
          const scroller = ev.closest('.timeline-scroll');
          scroller.scrollLeft = ev.offsetLeft - 200;
        }
      });
    };
    attach(searchInput, 'input', onInput);
  }

  // map overlay
  const overlay = document.getElementById('mapOverlay');
  const list = document.getElementById('mapEventList');
  const title = document.getElementById('locationTitle');
  const fab = document.getElementById('openMap');

  const openMap = () => { overlay.classList.add('open'); fab.classList.add('active'); setTimeout(() => { try { _map && _map.invalidateSize(); } catch (e) {} }, 300); };
  const closeMap = () => { overlay.classList.remove('open'); fab.classList.remove('active'); };

  if (fab) attach(fab, 'click', () => { overlay.classList.contains('open') ? closeMap() : openMap(); });
  if (overlay) attach(overlay, 'click', e => { if (!e.target.closest('.map-panel')) closeMap(); });
  const mapPanel = document.querySelector('.map-panel'); if (mapPanel) attach(mapPanel, 'click', e => e.stopPropagation());

  // day tabs
  document.querySelectorAll('.day-tab').forEach(b => {
    const onClick = () => {
      document.querySelectorAll('.day-tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      currentDay = b.dataset.day;
      renderMapEvents();
    };
    attach(b, 'click', onClick);
  });

  // render map events uses mapData/currentLoc/currentDay defined above
  renderMapEvents();

  // Leaflet will be initialised asynchronously when its script loads
}

export function CleanupSchedule() {
  detachAll();
  try { if (_map) { _map.remove(); _map = null; } } catch (e) {}
}
