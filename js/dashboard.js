// ======================
// DASHBOARD.JS
// ======================

function renderDashboard() {
    const screen = document.getElementById('s-d');
    if (!screen) return;

    screen.innerHTML = `
        <div style="padding:20px;">
            <h1 style="font-size:32px;margin-bottom:8px;">👋 Willkommen zurück</h1>
            <p style="color:#94a3b8;">Heute ist ${new Date().toLocaleDateString('de-DE', { weekday: 'long' })}</p>
            
            <div class="card" style="margin-top:30px;">
                <h3>📊 Schnellübersicht</h3>
                <p style="color:var(--mut);">Noch keine Aktivitäten heute</p>
            </div>

            <button onclick="navTo('am')" style="background:#38bdf8;color:#0f172a;padding:16px;border-radius:12px;border:none;width:100%;font-size:17px;">
                📐 Neues Aufmass starten
            </button>
        </div>
    `;
}

window.renderDashboard = renderDashboard;