/**
 * Konfigurace Firebase pro web Kamenictví Obelisk
 * 
 * Návod k nastavení:
 * 1. Jděte na https://console.firebase.google.com/ a přihlaste se Google účtem.
 * 2. Vytvořte nový bezplatný projekt (např. "obelisk-kamenictvi").
 * 3. V projektu klikněte na ikonu webu (</>) a zadejte název aplikace.
 * 4. Zkopírujte konfiguraci (firebaseConfig) a vložte hodnoty níže.
 * 5. V levém menu povolte:
 *    - Authentication -> Začínáme -> Sign-in method -> Povolit Email/Password (v záložce Uživatelé pak vytvořte účet pro majitele).
 *    - Firestore Database -> Vytvořit databázi -> Spustit v produkčním režimu (Pravidla: čtení pro všechny, zápis pro přihlášené).
 *    - Storage -> Začínáme (Pravidla: čtení pro všechny, zápis pro přihlášené).
 */

window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyATjqEVi_-M5vjg6hXIYGvvxbO8dG-F7j4",
    authDomain: "obelisk-admin.firebaseapp.com",
    projectId: "obelisk-admin",
    storageBucket: "obelisk-admin.firebasestorage.app",
    messagingSenderId: "640224618422",
    appId: "1:640224618422:web:85a0a63a3b952349720317",
    measurementId: "G-5NGE4R60M6"
};

/**
 * Konfigurace Cloudinary pro nahrávání fotek a videí zdarma (bez platební karty)
 * Získejte zdarma na: https://cloudinary.com/
 * 1. Zaregistrujte se zdarma (není potřeba platební karta).
 * 2. V Dashboardu uvidíte "Cloud Name" (např. "dxyz123").
 * 3. V Settings (ozubené kolo) -> Upload -> sekce "Upload presets" -> Add upload preset:
 *    - Signing Mode: zvolte "Unsigned"
 *    - Název presetu (např. "obelisk_preset") vložte níže.
 */
window.CLOUDINARY_CONFIG = {
    cloudName: "guwrtapg",
    uploadPreset: "ObeliskGallery"
};

/**
 * Ověření konfigurace
 */
window.isFirebaseConfigured = function() {
    return window.FIREBASE_CONFIG && 
           window.FIREBASE_CONFIG.apiKey && 
           window.FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" &&
           window.FIREBASE_CONFIG.projectId &&
           window.FIREBASE_CONFIG.projectId !== "YOUR_PROJECT_ID";
};

window.isCloudinaryConfigured = function() {
    return window.CLOUDINARY_CONFIG &&
           window.CLOUDINARY_CONFIG.cloudName &&
           window.CLOUDINARY_CONFIG.cloudName !== "YOUR_CLOUD_NAME" &&
           window.CLOUDINARY_CONFIG.uploadPreset &&
           window.CLOUDINARY_CONFIG.uploadPreset !== "YOUR_UPLOAD_PRESET";
};

/**
 * Původní fotografie z webu (49 položek)
 */
window.DEFAULT_GALLERY_IMAGES = [
    "WhatsApp Image 2026-06-02 at 12.19.39.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (4).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (5).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (6).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (7).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (8).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.39 (9).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (4).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (5).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.40 (6).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (4).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (5).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.41 (6).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.42.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.42 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.42 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.42 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.43 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.43 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.44.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.44 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.44 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.44 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.44 (4).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.45.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.45 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.45 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.45 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.46.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.46 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47.jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (3).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (4).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (5).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (6).jpeg",
    "WhatsApp Image 2026-06-02 at 12.19.47 (7).jpeg"
];
