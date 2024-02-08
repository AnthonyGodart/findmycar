function openMap() {

    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');

        // Détecter le type de navigateur mobile
        const userAgent = navigator.userAgent.toLowerCase();

        // Sélectionner l'application de cartographie en fonction du navigateur
        let selectedMapApp;
        if (userAgent.indexOf('chrome') !== -1 && userAgent.indexOf('mobile') !== -1) {
            selectedMapApp = 'google'; // Safari mobile (iPhone/iPad)
        } else if (userAgent.indexOf('safari') !== -1 && userAgent.indexOf('mobile') !== -1) {
            selectedMapApp = 'apple'; // Chrome mobile (Android)
        } else {
            // Si le navigateur n'est ni Safari mobile ni Chrome mobile, utilisez une application par défaut
            selectedMapApp = 'google';
        }

        // Construire l'URL en fonction de l'application de cartographie
        let mapURL;
        switch (selectedMapApp) {
            case 'apple':
                mapURL = `https://maps.apple.com/?ll=${lat},${lng}`;
                break;
            case 'waze':
                mapURL = `https://www.waze.com/ul?ll=${lat},${lng}`;
                break;
            // Ajoutez d'autres cas au besoin
            default:
                mapURL = `https://map.google.com/maps?q=${lat},${lng}`;
                break;
        }

        // Ouvrir l'application de cartographie dans une nouvelle fenêtre/onglet
        window.location.href = mapURL;
    };