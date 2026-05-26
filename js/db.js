// ======================
// WORKBASE - DB.JS
// Lokale Speicherung mit localStorage
// ======================

const DB = {
    // Hilfsfunktionen
    get(key) {
        try {
            const data = localStorage.getItem('workbase_' + key);
            return data ? JSON.parse(data) : [];
        } catch(e) {
            console.error("DB Error:", e);
            return [];
        }
    },
    
    save(key, data) {
        try {
            localStorage.setItem('workbase_' + key, JSON.stringify(data));
            return true;
        } catch(e) {
            console.error("Save Error:", e);
            return false;
        }
    },

    // Spezifische Sammlungen
    kunden() { return this.get('kunden'); },
    sKunden(data) { return this.save('kunden', data); },

    projekte() { return this.get('projekte'); },
    sProjekte(data) { return this.save('projekte', data); },

    angebote() { return this.get('angebote'); },
    sAngebote(data) { return this.save('angebote', data); },

    rechnungen() { return this.get('rechnungen'); },
    sRechnungen(data) { return this.save('rechnungen', data); },

    notizen() { return this.get('notizen'); },
    sNotizen(data) { return this.save('notizen', data); },

    settings() { 
        const def = { firma: "Meine Firma", inhaber: "Max Mustermann", mwst: 19 };
        return this.get('settings') || def;
    },
    sSettings(data) { return this.save('settings', data); },

    // Aufmass (separat)
    aufmass() { return this.get('aufmass'); },
    sAufmass(data) { return this.save('aufmass', data); }
};

// Globale Hilfsfunktion
window.el = (id) => document.getElementById(id);

console.log('%cDB initialized', 'color:#22c55e');