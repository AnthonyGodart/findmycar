if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(err => {
                console.error('Service Worker registration failed:', err);
            });
    });
};

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Empêcher l'affichage immédiat de la boîte de dialogue
    e.preventDefault();
    // Sauvegarder l'événement pour pouvoir l'utiliser plus tard
    deferredPrompt = e;
    // Afficher le bouton d'installation personnalisé
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        // Cacher le bouton d'installation
        installButton.style.display = 'none';
        // Afficher la boîte de dialogue d'installation
        deferredPrompt.prompt();
        // Attendre que l'utilisateur réponde à la boîte de dialogue
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L\'utilisateur a accepté l\'installation');
            } else {
                console.log('L\'utilisateur a refusé l\'installation');
            }
            deferredPrompt = null;
        });
    });
});
