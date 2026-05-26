// ======================
// AUFMASS.JS - Erweiterte Version
// ======================

let aufmassRaeume = [];

function renderAufmassScreen() {
    const screen = document.getElementById('s-am');
    if (!screen) return;

    let html = `
        <div style="padding:16px;">
            <h1>📐 Aufmass Pro</h1>
            <div class="card">
                <button onclick="neuenRaum()" style="background:#22c55e;color:white;padding:16px;border-radius:12px;border:none;width:100%;margin-bottom:16px;">
                    + Neuen Raum erfassen
                </button>
            </div>
    `;

    if (aufmassRaeume.length === 0) {
        html += `<p style="text-align:center;color:#94a3b8;padding:40px 20px;">Noch keine Räume erfasst.</p>`;
    } else {
        html += aufmassRaeume.map(r => `
            <div class="card">
                <strong>${r.name}</strong><br>
                <small style="color:#94a3b8">${r.flaeche ? r.flaeche + ' m²' : 'Noch keine Fläche'}</small>
            </div>
        `).join('');
    }

    html += `</div>`;
    screen.innerHTML = html;
}

function neuenRaum() {
    const name = prompt("Raumname eingeben (z.B. Wohnzimmer, Bad, Fassade):");
    if (name && name.trim() !== "") {
        aufmassRaeume.push({
            id: Date.now(),
            name: name.trim(),
            flaeche: 0,
            datum: new Date()
        });
        alert("Raum '" + name + "' wurde hinzugefügt!");
        renderAufmassScreen();
    }
}

// Export
window.renderAufmassScreen = renderAufmassScreen;
window.neuenRaum = neuenRaum;