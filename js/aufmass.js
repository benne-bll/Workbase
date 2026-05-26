// ======================
// WORKBASE - AUFMASS.JS
// ======================

let aufmassRaeume = [];

function initAufmass() {
    console.log('%cAufmass Modul geladen', 'color:#38bdf8');
    
    // Beispiel: Neuen Raum hinzufügen (später erweitern)
    window.neuenRaum = function() {
        const name = prompt("Raumname (z.B. Wohnzimmer):");
        if (name) {
            aufmassRaeume.push({
                id: Date.now(),
                name: name,
                flaeche: 0,
                datum: new Date().toISOString()
            });
            toast("Raum hinzugefügt: " + name);
            renderAufmassListe();
        }
    };
}

function renderAufmassListe() {
    // Wird später im Screen "s-am" gerendert
    console.log("Aufmass Räume:", aufmassRaeume);
}

// Export
window.initAufmass = initAufmass;