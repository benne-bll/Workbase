// ======================
// WORKBASE - MAIN.JS (aktualisiert)
// ======================

import './db.js';
import './ui.js';
import './dashboard.js';
import './aufmass.js';

let currentScreen = 'd';

function navTo(screen) {
    document.querySelectorAll('.scr').forEach(s => s.classList.remove('act'));
    
    let target = document.getElementById(`s-${screen}`);
    if (!target) {
        target = document.createElement('div');
        target.id = `s-${screen}`;
        target.className = 'scr';
        document.getElementById('screens').appendChild(target);
    }
    target.classList.add('act');
    
    // Aktiven Button hervorheben
    document.querySelectorAll('.nb').forEach(btn => btn.classList.remove('on'));
    const activeBtn = document.querySelector(`.nb[data-s="${screen}"]`);
    if (activeBtn) activeBtn.classList.add('on');

    currentScreen = screen;

    if (screen === 'd') renderDashboard();
    if (screen === 'am') initAufmass();
}

function initNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <button class="nb on" data-s="d">🏠 Heute</button>
        <button class="nb" data-s="k">👥 Kunden</button>
        <button class="nb" data-s="p">📂 Projekte</button>
        <button class="nb" data-s="r">💰 Abrechnung</button>
        <button class="nb" data-s="am">📐 Aufmass</button>
    `;

    nav.querySelectorAll('.nb').forEach(btn => {
        btn.addEventListener('click', () => navTo(btn.dataset.s));
    });
}

function initApp() {
    initNav();
    navTo('d');           // Startet mit Dashboard
    console.log('%c✅ Workbase modulare Version gestartet', 'color:#38bdf8;font-weight:bold');
}

// Start
document.addEventListener('DOMContentLoaded', initApp);