// ======================
// WORKBASE - UI.JS
// Hilfsfunktionen für UI
// ======================

// Toast Notification
function toast(msg, error = false) {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#22c55e;color:white;padding:12px 20px;border-radius:12px;font-weight:600;z-index:999;white-space:nowrap;';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.background = error ? '#ef4444' : '#22c55e';
    t.style.opacity = '1';
    
    setTimeout(() => {
        t.style.opacity = '0';
    }, 2500);
}

// Modal öffnen / schließen
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('open');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('open');
}

// Einfache leere Zustände
function emptyState(icon, title, text) {
    return `
        <div style="text-align:center;padding:60px 20px;color:var(--mut);">
            <div style="font-size:48px;margin-bottom:16px;opacity:0.3;">${icon}</div>
            <h3 style="margin:8px 0;">${title}</h3>
            <p>${text}</p>
        </div>
    `;
}

// Haptic Feedback (iOS)
function haptic(type = 'light') {
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

// Export für andere Module
window.toast = toast;
window.openModal = openModal;
window.closeModal = closeModal;
window.emptyState = emptyState;
window.haptic = haptic;

console.log('%cUI Helpers loaded', 'color:#38bdf8');