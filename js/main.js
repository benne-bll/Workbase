// ======================
// WORKBASE - MAIN.JS (Vollversion)
// ======================

function toast(msg, error = false) {
    alert(msg); // später schöner Toast
}

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

    document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));
    const active = document.querySelector(`.nb[data-s="${screen}"]`);
    if (active) active.classList.add('on');

    currentScreen = screen;

    if (screen === 'd') renderDashboard();
    if (screen === 'am') renderAufmass();
}

function renderDashboard() {
    const s = document.getElementById('s-d');
    s.innerHTML = `
        <div style="padding:20px;">
            <h1>👋 Willkommen zurück</h1>
            <div class="card" style="margin-top:20px;">
                <h3>Heute</h3>
                <p style="color:#94a3b8;">Noch keine Einträge</p>
            </div>
            <button onclick="navTo('am')" style="background:#38bdf8;color:#0f172a;padding:16px;border-radius:12px;border:none;width:100%;font-size:17px;margin-top:20px;">
                📐 Neues Aufmass starten
            </button>
        </div>
    `;
}

function renderAufmass() {
    const s = document.getElementById('s-am');
    s.innerHTML = `
        <div style="padding:20px;">
            <h1>📐 Aufmass Pro</h1>
            <div class="card">
                <p>Aufmass-Modul wird geladen...</p>
                <button onclick="alert('Neuen Raum erstellen - kommt als Nächstes')" style="margin-top:15px;width:100%;padding:14px;background:#22c55e;color:white;border:none;border-radius:12px;">
                    + Neuen Raum hinzufügen
                </button>
            </div>
        </div>
    `;
}

function initNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <button class="nb on" data-s="d">🏠 Heute</button>
        <button class="nb" data-s="k">👥 Kunden</button>
        <button class="nb" data-s="p">📁 Projekte</button>
        <button class="nb" data-s="r">💰 Abrechnung</button>
        <button class="nb" data-s="am">📐 Aufmass</button>
    `;

    nav.querySelectorAll('.nb').forEach(btn => {
        btn.addEventListener('click', () => navTo(btn.dataset.s));
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    navTo('d');
    console.log('✅ Workbase - Vollversion gestartet');
});