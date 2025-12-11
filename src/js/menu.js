// menu.js — controle l'ouverture/fermeture du menu burger
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('mainMenu');
    const overlay = document.createElement('div');
    overlay.id = 'menuOverlay';
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        menu.classList.add('open');
        overlay.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    // Toggle when clicking burger
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            const isOpen = menu.classList.contains('open');
            if (isOpen) closeMenu(); else openMenu();
        });
    }

    // Close when clicking overlay
    overlay.addEventListener('click', closeMenu);

    // Add a close button inside the menu if not present
    if (menu && !menu.querySelector('.menu__close')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'menu__close';
        btn.setAttribute('aria-label', 'Fermer le menu');
        btn.textContent = '✕';
        btn.addEventListener('click', closeMenu);
        // Insert at top of menu
        menu.insertBefore(btn, menu.firstChild);
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
});
