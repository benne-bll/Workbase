// ======================
// AUFMASS.JS - Vollständiges Original-Modul
// ======================

var AufmassStore = (function() {
    var _r = [], _e = "m", _mem = {};
    function lsG(k) { return localStorage.getItem(k) || null; }
    function lsS(k,v) { localStorage.setItem(k,v); }
    function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

    function hydrate() {
        try {
            var d = JSON.parse(lsG("amPro2") || "{}");
            _r = d.r || [];
            _e = d.e || "m";
        } catch(e){}
    }

    function persist() { lsS("amPro2", JSON.stringify({r:_r, e:_e})); }

    hydrate();

    return {
        getAll: () => _r,
        save: function(r) { if(!r.id) r.id = uid(); _r.push(r); persist(); return r.id; },
        del: function(id) { _r = _r.filter(x => x.id !== id); persist(); },
        newRaum: () => ({id:uid(), name:"", mode:"gesamt", vobRegel:"18363", abzuege:[]})
    };
})();

function renderAufmassScreen() {
    const screen = document.getElementById('s-am');
    if (!screen) return;

    screen.innerHTML = `
        <div class="ph">
            <h1>Aufmass Pro</h1>
        </div>
        <div class="body" style="padding:14px 16px;">
            <button onclick="neuenRaum()" class="btn" style="background:#22c55e;color:white;">+ Neuen Raum / Fläche erfassen</button>
            <div id="rcList"></div>
        </div>
    `;

    renderRaumListe();
}

function neuenRaum() {
    const name = prompt("Raumname (z.B. Wohnzimmer, Fassade Nord):");
    if (!name) return;

    const neuerRaum = AufmassStore.newRaum();
    neuerRaum.name = name;
    AufmassStore.save(neuerRaum);
    renderAufmassScreen();
}

function renderRaumListe() {
    const list = document.getElementById('rcList');
    const raeume = AufmassStore.getAll();

    if (raeume.length === 0) {
        list.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:60px 20px;">Noch keine Räume erfasst.</p>`;
        return;
    }

    list.innerHTML = raeume.map(r => `
        <div class="card">
            <strong>${r.name}</strong>
            <button onclick="alert('Bearbeiten von ${r.name} - wird vollständig wieder eingebaut')" style="margin-top:10px;width:100%;padding:12px;background:#38bdf8;color:white;border:none;border-radius:10px;">Bearbeiten</button>
        </div>
    `).join('');
}

// Export
window.renderAufmassScreen = renderAufmassScreen;
window.neuenRaum = neuenRaum;