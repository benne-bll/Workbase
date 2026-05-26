// ======================
// WORKBASE - MAIN.JS
// ======================

import './db.js';
import './ui.js';

// Aktueller Screen
let currentScreen = 'd';

// Navigation
function navTo(screen) {
    document.querySelectorAll('.scr').forEach(s => s.classList.remove('act'));
    const target = document.getElementById(`s-${screen}`);
    if (target) target.classList.add('act');
    
    document.querySelectorAll('.nb').forEach(btn => btn.classList.remove('on'));
    const activeBtn = document.querySelector(`.nb[data-s="${screen}"]`);
    if (activeBtn) activeBtn.classList.add('on');
    
    currentScreen = screen;
    updateFAB();
}

// FAB (Floating Action Button)
function updateFAB() {
    const fab = document.getElementById('fabBtn');
    if (!fab) return;
    
    const showOn = ['d', 'k', 'p', 'a', 'r'];
    if (showOn.includes(currentScreen)) {
        fab.classList.add('show');
        fab.onclick = () => {
            if (currentScreen === 'k') oKunde();
            else if (currentScreen === 'p') oProjekt();
            else if (currentScreen === 'a') oAngNeu();
            else if (currentScreen === 'r') oRechNeu();
        };
    } else {
        fab.classList.remove('show');
    }
}

// Bottom Navigation erstellen
function initNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <button class="nb on" data-s="d">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Heute
        </button>
        <button class="nb" data-s="k">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            Kunden
        </button>
        <button class="nb" data-s="p">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Projekte
        </button>
        <button class="nb" data-s="r">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
            Abrechnung
        </button>
        <button class="nb" data-s="mehr">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            Mehr
        </button>
    `;

    nav.querySelectorAll('.nb').forEach(btn => {
        btn.addEventListener('click', () => {
            navTo(btn.dataset.s);
        });
    });
}

// App starten
function initApp() {
    initNav();
    navTo('d');
    console.log('%cWorkbase gestartet (modulare Version)', 'color:#38bdf8;font-weight:bold');
}

// Start
document.addEventListener('DOMContentLoaded', initApp);