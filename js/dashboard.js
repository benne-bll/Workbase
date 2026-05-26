// ======================
// DASHBOARD
// ======================

function renderSimpleDashboard() {
    const screen = document.getElementById('s-d');
    if (!screen) return;

    screen.innerHTML = `
        <div style="padding:20px 16px;">
            <h1 style="font-size:28px; margin-bottom:4px;">👋 Guten Tag!</h1>
            <p style="color:#94a3b8;">Heute ist ${new Date().toLocaleDateString('de-DE', {weekday:'long'})}</p>
            
            <div class="card" style="margin-top:30px;">
                <h3>📊 Schnellübersicht</h3>
                <p style="color:var(--mut);margin:12px 0;">Noch keine Daten für heute</p>
            </div>

            <button onclick="alert('Aufmass Modul wird gestartet...')" 
                    style="margin-top:20px; background:#38bdf8; color:#0f172a; padding:16px; border:none; border-radius:12px; font-size:17px; width:100%;">
                📐 Neuen Raum aufmessen
            </button>
        </div>
    `;
}

// Export
window.renderSimpleDashboard = renderSimpleDashboard;