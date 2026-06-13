// ======================
// PDF.JS - Professionelle Dokumente (dein gewünschtes Design)
// ======================

const PDF = {

    // ====================== ANGEBOT ======================
    createAngebot(data) {
        const s = this.getSettings();
        
        let roomsHTML = '';
        if (data.positionen && data.positionen.length > 0) {
            roomsHTML = data.positionen.map(room => {
                const leistungen = (room.leistungen || []).map(l => `<li>${l}</li>`).join('');
                return `
                    <div style="margin-bottom: 20px; border: 1px solid #0f766e; border-radius: 8px; overflow: hidden;">
                        <div style="background: #0f766e; color: white; padding: 12px 18px; font-weight: 700; font-size: 16px;">
                            ${room.name}
                        </div>
                        <div style="padding: 15px 18px; background: #f8fafc;">
                            <ul style="margin: 0 0 12px 18px; padding: 0; color: #334155; line-height: 1.6;">
                                ${leistungen}
                            </ul>
                            <div style="background: #e0f2fe; padding: 10px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; font-weight: 700; color: #0f766e;">
                                <span>Pauschalpreis</span>
                                <span style="font-size: 18px;">${room.preis || '0,00'} €</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Angebot ${data.nummer || ''}</title>
    <style>
        @page { size: A4; margin: 12mm; }
        body { 
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
            margin: 0; 
            color: #1e3a5f; 
            line-height: 1.5;
            background: white;
        }
        .header {
            background: #1e3a5f;
            color: white;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 { margin: 0; font-size: 32px; letter-spacing: -1px; }
        .section { margin: 25px 30px; }
        .total-bar {
            background: #1e3a5f;
            color: white;
            padding: 20px 30px;
            font-size: 22px;
            font-weight: 700;
            text-align: right;
            margin: 30px 30px 0;
            border-radius: 10px;
        }
        .footer { margin: 40px 30px 20px; font-size: 14px; color: #64748b; }
        ul { padding-left: 20px; }
        li { margin-bottom: 6px; }
    </style>
</head>
<body>
    <div class="header">
        <div>
            <h1>ANGEBOT</h1>
            <div style="opacity: 0.9; margin-top: 4px;">${data.typ || 'Malerarbeiten Innenbereich'}</div>
        </div>
        <div style="text-align: right; font-size: 14px;">
            <strong>Nr.:</strong> ${data.nummer || 'A-' + Date.now()}<br>
            <strong>Datum:</strong> ${new Date().toLocaleDateString('de-DE')}<br>
            <strong>Gültig bis:</strong> ${data.gueltigBis || 'in 30 Tagen'}
        </div>
    </div>

    <div style="padding: 0 30px; margin-top: 25px;">
        <h2 style="margin: 0 0 5px; font-size: 22px;">${data.kunde || 'Kunde'}</h2>
        <p style="color: #64748b; margin: 0;">${data.objekt || ''}</p>
    </div>

    <div class="section">
        ${roomsHTML || '<p>Keine Positionen vorhanden.</p>'}
    </div>

    <div class="total-bar">
        Gesamtpreis (alle Positionen): <strong>${data.gesamtpreis || '0,00'} €</strong>
    </div>

    <div class="footer">
        Vielen Dank für Ihr Vertrauen!<br>
        Bei Fragen stehen wir Ihnen jederzeit gerne zur Verfügung.<br><br>
        <strong>Mit freundlichen Grüßen</strong><br>
        Workbase – Maler & Handwerk<br>
        ${s.firma || ''} • ${s.tel || ''} • ${s.mail || ''}
    </div>

    <script>
        window.onload = function() {
            // Automatisch Druckdialog öffnen (kann später entfernt werden)
            // window.print();
        };
    </script>
</body>
</html>`;

        this.openPDF(html, `Angebot_${data.nummer || ''}`);
    },

    // ====================== RECHNUNG (gleiches Design) ======================
    createRechnung(data) {
        // Ähnliche Funktion wie oben, nur mit Rechnungs-Header
        alert('Rechnungs-PDF wird in Kürze im gleichen Design verfügbar sein.');
        // Später erweitern
    },

    getSettings() {
        try {
            return JSON.parse(localStorage.getItem('workbase_settings')) || {
                firma: 'Workbase',
                inhaber: 'Dein Name',
                adr: '',
                tel: '',
                mail: ''
            };
        } catch(e) { return {}; }
    },

    openPDF(html, filename) {
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
        
        // Optional: Automatisch als PDF speichern / Drucken
        setTimeout(() => {
            win.focus();
            // win.print(); // Auskommentiert für Test
        }, 800);
    }
};

// Global verfügbar machen
window.PDF = PDF;
console.log('%c✅ Professionelles PDF-Modul geladen (dein Design)', 'color:#22c55e; font-weight:bold');