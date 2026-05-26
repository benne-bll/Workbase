// ======================
// WORKBASE - DASHBOARD.JS
// ======================

function renderDashboard() {
    const screen = document.getElementById('s-d');
    if (!screen) {
        const newScreen = document.createElement('div');
        newScreen.id = 's-d';
        newScreen.className = 'scr act';
        newScreen.innerHTML = `
            <div class="ph">
                <h1>Willkommen zurück 👋</h1>
                <p>Heute • ${new Date().toLocaleDateString('de-DE')}</p>
            </div>
            <div style="padding:16px;">
                <div class="card">
                    <h3>Keine Projekte heute</h3>
                    <p style="color:var(--mut);margin-top:8px;">Du hast noch keine Termine oder Aufgaben.</p>
                </div>
                
                <button class="btn bp" onclick="neuenRaum()">Neuen Raum aufmessen</button>
            </div>
        `;
        document.getElementById('screens').appendChild(newScreen);
    }
}

// Export
window.renderDashboard = renderDashboard;