// ======================
// WORKBASE - MAIN.JS (Fix Version)
// ======================

// Einfache Hilfsfunktionen
function toast(msg) {
    alert(msg);
}

// Navigation
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

    // Navigation Buttons
    document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));
    const activeBtn = document.querySelector(`.nb[data-s="${screen}"]`);
    if (activeBtn) activeBtn.classList.add('on');

    // Render Inhalt
    if (screen === 'd') renderDashboard();
}

// Dashboard
function renderDashboard() {
    const screen = document.getElementById('s-d');
    screen.innerHTML = `
        <div style="padding: 30px 20px; text-align: center;">
            <h1 style="font-size: 32px; margin-bottom: 8px;">👋 Hallo!</h1>
            <p style="color: #94a3b8; font-size: 18px;">Willkommen in Workbase</p>
            
            <div style="margin-top: 50px; background: #1e293b; border-radius: 16px; padding: 24px;">
                <p style="color: #38bdf8; font-size: 17px; font-weight: 600;">Modulare Version</p>
                <p style="color: #94a3b8; margin-top: 12px;">Die App läuft jetzt strukturiert.</p>
            </div>

            <button onclick="alert('Super! Das Aufmass-Modul kommt als Nächstes.')" 
                    style="margin-top: 40px; background: #38bdf8; color: #0f172a; padding: 18px 32px; border: none; border-radius: 12px; font-size: 18px; font-weight: 600; width: 100%;">
                📐 Aufmass starten
            </button>
        </div>
    `;
}

// Navigation initialisieren
function initNav() {
    const navHTML = `
        <button class="nb on" data-s="d">🏠 Heute</button>
        <button class="nb" data-s="k">👥 Kunden</button>
        <button class="nb" data-s="p">📁 Projekte</button>
        <button class="nb" data-s="r">💰 Abrechnung</button>
        <button class="nb" data-s="am">📐 Aufmass</button>
    `;
    document.getElementById('nav').innerHTML = navHTML;

    document.querySelectorAll('.nb').forEach(btn => {
        btn.addEventListener('click', () => navTo(btn.dataset.s));
    });
}

// App Start
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    navTo('d');
    console.log('✅ Workbase läuft jetzt!');
});