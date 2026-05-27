// ======================
// AUFMASS.JS - Kernlogik (wird erweitert)
// ======================

let aufmassRaeume = [];

function initAufmass() {
    renderAufmassScreen();
}

function renderAufmassScreen() {
    const screen = document.getElementById('s-am');
    if (!screen) return;

    screen.innerHTML = `
        <div class="ph">
            <h1>Aufmass Pro</h1>
        </div>
        <div style="padding:16px;">
            <button onclick="neuenRaum()" class="btn" style="background:#22c55e;color:white;">+ Neuen Raum erfassen</button>
            
            <div id="raumListe"></div>
        </div>
    `;

    renderRaumListe();
}

function neuenRaum() {
    const name = prompt("Raumname (z.B. Wohnzimmer, Wand Nord):");
    if (!name) return;

    aufmassRaeume.push({
        id: Date.now(),
        name: name,
        mode: "gesamt",
        flaeche: 0
    });

    renderRaumListe();
}

function renderRaumListe() {
    const list = document.getElementById('raumListe');
    if (!list) return;

    if (aufmassRaeume.length === 0) {
        list.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:40px;">Noch keine Räume</p>`;
        return;
    }

    list.innerHTML = aufmassRaeume.map(r => `
        <div class="card">
            <strong>${r.name}</strong><br>
            <small style="color:#94a3b8">${r.flaeche ? r.flaeche + ' m²' : 'Noch keine Fläche berechnet'}</small>
        </div>
    `).join('');
}

// Export
window.initAufmass = initAufmass;
window.neuenRaum = neuenRaum;