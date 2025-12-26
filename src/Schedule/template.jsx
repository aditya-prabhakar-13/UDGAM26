
export default function ScheduleTemplate() {
  return (
    <div className="schedule-page-wrap">
      <h1 style={{ fontFamily: "Creato Display", fontWeight: 900, fontSize: 64}}>Schedule</h1>

      <div className="top-bar">
        <div className="date-range">23 January – 25 January 2026</div>

        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
            <g opacity="0.73">
              <path d="M22.4092 22.505L18.7303 18.55C19.9172 16.9195 20.5613 14.9061 20.5589 12.8333C20.5589 10.9874 20.0512 9.18287 19.1 7.64801C18.1489 6.11316 16.7969 4.91688 15.2152 4.21046C13.6334 3.50404 11.8929 3.31921 10.2137 3.67934C8.53455 4.03947 6.99212 4.92838 5.7815 6.23367C4.57088 7.53896 3.74644 9.202 3.41243 11.0125C3.07842 12.823 3.24984 14.6996 3.90503 16.405C4.56021 18.1105 5.66972 19.5682 7.09326 20.5937C8.5168 21.6193 10.1904 22.1667 11.9025 22.1667C13.8249 22.1692 15.6923 21.4748 17.2046 20.195L20.8727 24.1617C20.9733 24.271 21.093 24.3578 21.2248 24.417C21.3567 24.4763 21.4981 24.5068 21.641 24.5068C21.7838 24.5068 21.9252 24.4763 22.0571 24.417C22.189 24.3578 22.3086 24.271 22.4092 24.1617C22.5106 24.0532 22.5911 23.9242 22.6461 23.782C22.701 23.6398 22.7293 23.4873 22.7293 23.3333C22.7293 23.1793 22.701 23.0268 22.6461 22.8847C22.5911 22.7425 22.5106 22.6135 22.4092 22.505ZM5.4102 12.8333C5.4102 11.4489 5.79097 10.0955 6.50435 8.94435C7.21774 7.7932 8.2317 6.89599 9.41801 6.36618C10.6043 5.83637 11.9097 5.69774 13.1691 5.96784C14.4285 6.23794 15.5853 6.90462 16.4933 7.88359C17.4012 8.86256 18.0196 10.1098 18.2701 11.4677C18.5206 12.8256 18.392 14.233 17.9006 15.5121C17.4092 16.7912 16.5771 17.8845 15.5094 18.6536C14.4418 19.4228 13.1866 19.8333 11.9025 19.8333C10.1806 19.8333 8.5293 19.0958 7.31175 17.7831C6.09421 16.4703 5.4102 14.6899 5.4102 12.8333Z" fill="#FFF9F0"/>
            </g>
          </svg>
          <input id="searchInput" placeholder="Search For An Event..." autoComplete="off" spellCheck={false} />
        </div>
      </div>

      <div className="schedule-wrap">

        <div className="day-card open">
          <div className="day-header">
            <span className="day-title">DAY 1 – 23 January, 2026</span>

            <span className="accordion-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 36 20" fill="none">
                <path d="M35.5205 17.1536L19.1577 0.488754C19.0057 0.333811 18.8252 0.210892 18.6266 0.127028C18.428 0.0431633 18.215 0 18 0C17.785 0 17.572 0.0431633 17.3734 0.127028C17.1748 0.210892 16.9943 0.333811 16.8423 0.488754L0.479522 17.1536C0.172489 17.4663 0 17.8904 0 18.3326C0 18.7748 0.172489 19.1989 0.479522 19.5116C0.786555 19.8243 1.20298 20 1.63719 20C2.0714 20 2.48783 19.8243 2.79486 19.5116L18 4.02378L33.2051 19.5116C33.5122 19.8243 33.9286 20 34.3628 20C34.797 20 35.2134 19.8243 35.5205 19.5116C35.8275 19.1989 36 18.7748 36 18.3326C36 17.8904 35.8275 17.4663 35.5205 17.1536Z" fill="#141131"/>
              </svg>
            </span>
          </div>

          <div className="timeline-wrapper">
            <div className="schedule-body">
              <div className="left-column">
                <div className="left-header">TIME</div>
                <div className="venue">Hall A</div>
                <div className="venue">Hall B</div>
                <div className="venue">Hall C</div>
                <div className="venue">Auditorium</div>
              </div>
              <div className="timeline">
                <div className="timeline-scroll">
                  <div className="grid" id="grid1"></div>
                </div>
              </div>
            </div>
            <div className="fake-scroll"><div className="thumb"></div></div>
          </div>
        </div>

        <div className="day-card">
          <div className="day-header">
            <span className="day-title">DAY 2 – 24 January, 2026</span>
            <span className="accordion-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 36 20" fill="none">
                <path d="M35.5205 17.1536L19.1577 0.488754C19.0057 0.333811 18.8252 0.210892 18.6266 0.127028C18.428 0.0431633 18.215 0 18 0C17.785 0 17.572 0.0431633 17.3734 0.127028C17.1748 0.210892 16.9943 0.333811 16.8423 0.488754L0.479522 17.1536C0.172489 17.4663 0 17.8904 0 18.3326C0 18.7748 0.172489 19.1989 0.479522 19.5116C0.786555 19.8243 1.20298 20 1.63719 20C2.0714 20 2.48783 19.8243 2.79486 19.5116L18 4.02378L33.2051 19.5116C33.5122 19.8243 33.9286 20 34.3628 20C34.797 20 35.2134 19.8243 35.5205 19.5116C35.8275 19.1989 36 18.7748 36 18.3326C36 17.8904 35.8275 17.4663 35.5205 17.1536Z" fill="#141131"/>
              </svg>
            </span>
          </div>

          <div className="timeline-wrapper">
            <div className="schedule-body">
              <div className="left-column">
                <div className="left-header">TIME</div>
                <div className="venue">Hall A</div>
                <div className="venue">Hall B</div>
                <div className="venue">Hall C</div>
                <div className="venue">Auditorium</div>
              </div>
              <div className="timeline">
                <div className="timeline-scroll">
                  <div className="grid" id="grid2"></div>
                </div>
              </div>
            </div>
            <div className="fake-scroll"><div className="thumb"></div></div>
          </div>
        </div>

        <div className="day-card">
          <div className="day-header">
            <span className="day-title">DAY 3 – 25 January, 2026</span>
            <span className="accordion-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 36 20" fill="none">
                <path d="M35.5205 17.1536L19.1577 0.488754C19.0057 0.333811 18.8252 0.210892 18.6266 0.127028C18.428 0.0431633 18.215 0 18 0C17.785 0 17.572 0.0431633 17.3734 0.127028C17.1748 0.210892 16.9943 0.333811 16.8423 0.488754L0.479522 17.1536C0.172489 17.4663 0 17.8904 0 18.3326C0 18.7748 0.172489 19.1989 0.479522 19.5116C0.786555 19.8243 1.20298 20 1.63719 20C2.0714 20 2.48783 19.8243 2.79486 19.5116L18 4.02378L33.2051 19.5116C33.5122 19.8243 33.9286 20 34.3628 20C34.797 20 35.2134 19.8243 35.5205 19.5116C35.8275 19.1989 36 18.7748 36 18.3326C36 17.8904 35.8275 17.4663 35.5205 17.1536Z" fill="#141131"/>
              </svg>
            </span>
          </div>

          <div className="timeline-wrapper">
            <div className="schedule-body">
              <div className="left-column">
                <div className="left-header">TIME</div>
                <div className="venue">Hall A</div>
                <div className="venue">Hall B</div>
                <div className="venue">Hall C</div>
                <div className="venue">Auditorium</div>
              </div>
              <div className="timeline">
                <div className="timeline-scroll">
                  <div className="grid" id="grid3"></div>
                </div>
              </div>
            </div>
            <div className="fake-scroll"><div className="thumb"></div></div>
          </div>
        </div>
      </div>

      <button className="map-fab" id="openMap" aria-label="Open map">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 112C576 103.7 571.7 96 564.7 91.6C557.7 87.2 548.8 86.8 541.4 90.5L416.5 152.1L244 93.4C230.3 88.7 215.3 89.6 202.1 95.7L77.8 154.3C69.4 158.2 64 166.7 64 176L64 528C64 536.2 68.2 543.9 75.1 548.3C82 552.7 90.7 553.2 98.2 549.7L225.5 489.8L396.2 546.7C409.9 551.3 424.7 550.4 437.8 544.2L562.2 485.7C570.6 481.7 576 473.3 576 464L576 112zM208 146.1L208 445.1L112 490.3L112 191.3L208 146.1zM256 449.4L256 148.3L384 191.8L384 492.1L256 449.4zM432 198L528 150.6L528 448.8L432 494L432 198z"/></svg>
      </button>

      <div className="map-overlay" id="mapOverlay">
        <div className="map-panel">
          <div className="map-area">
            <div id="realMap"></div>
            <div className="map-label">Academic Block, IIT Guwahati</div>
          </div>

          <div className="map-events">
            <h2 id="locationTitle">Conference Hall</h2>

            <div className="day-tabs">
              <button className="day-tab active" data-day="1">DAY 1</button>
              <button className="day-tab" data-day="2">DAY 2</button>
              <button className="day-tab" data-day="3">DAY 3</button>
            </div>

            <div className="event-list" id="mapEventList"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
