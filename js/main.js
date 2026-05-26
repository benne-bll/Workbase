// ======================
// MAIN.JS - Navigation & Core
// ======================

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

    // Highlight active button
    document.querySelectorAll('.nb').forEach(btn => btn.classList.remove('on'));
    const activeBtn = document.querySelector(`.nb[data-s="${screen}"]`);
    if (activeBtn) activeBtn.classList.add('on');

    currentScreen = screen;

    // Render content
    if (screen === 'd') renderDashboard();
    if (screen === 'am') renderAufmassScreen();
}

function renderDashboard() {
    const s = document.getElementById('s-d');
    s.innerHTML = `
        <div style="padding:20px;text-align:center">
            <h1 style="font-size:32px">👋 Willkommen</h1>
            <p style="color:#94a3b8;margin-top:8px">Workbase läuft modular</p>
            <div style="margin-top:40px" class="card">
                <h3>Dashboard</h3>
                <p>Hier kommen später deine heutigen Aufgaben hin.</p>
            </div>
        </div>
    `;
}

function renderAufmassScreen() {
    const s = document.getElementById('s-am');
    s.innerHTML = `
        <div style="padding:20px">
            <h1>📐 Aufmass Pro</h1>
            <div class="card">
                <p>Dein volles Aufmass-Modul wird hier wieder eingebaut.</p>
                <button onclick="alert('Neuen Raum erfassen - kommt als Nächstes')" style="margin-top:15px;width:100%;padding:16px;background:#22c55e;color:white;border:none;border-radius:12px">
                    + Neuen Raum erfassen
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
    console.log('%c✅ Navigation funktioniert jetzt', 'color:#38bdf8;font-weight:bold');
});