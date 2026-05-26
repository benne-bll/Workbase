// ======================
// WORKBASE - MAIN.JS (SIMPLE VERSION)
// ======================

// Hilfsfunktionen
function toast(msg) {
    alert(msg); // Vorübergehend als Alert
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
    const btn = document.querySelector(`.nb[data-s="${screen}"]`);
    if (btn) btn.classList.add('on');

    currentScreen = screen;
    
    if (screen === 'd') renderSimpleDashboard();
}

function renderSimpleDashboard() {
    const screen = document.getElementById('s-d');
    screen.innerHTML = `
        <div style="padding:20px;text-align:center">
            <h1 style="font-size:28px;margin-bottom:8px">👋 Willkommen bei Workbase</h1>
            <p style="color:#94a3b8">Modulare Version läuft!</p>
            
            <div style="margin-top:40px">
                <button onclick="alert('Aufmass gestartet!')" 
                        style="background:#38bdf8;color:black;padding:16px 32px;border:none;border-radius:12px;font-size:18px">
                    📐 Aufmass starten
                </button>
            </div>
        </div>
    `;
}

function initNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <button class="nb on" data-s="d">🏠 Heute</button>
        <button class="nb" data-s="am">📐 Aufmass</button>
        <button class="nb" data-s="k">👥 Kunden</button>
    `;

    nav.querySelectorAll('.nb').forEach(btn => {
        btn.addEventListener('click', () => navTo(btn.dataset.s));
    });
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    navTo('d');
    console.log('✅ Workbase Simple Version läuft');
});