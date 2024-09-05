function storePosition() {

    navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        { enableHighAccuracy: true }
    );

    function errorCallback(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.error("L'utilisateur a refusé la demande de géolocalisation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("L'information de localisation n'est pas disponible.");
                break;
            case error.TIMEOUT:
                console.error("La demande de géolocalisation a expiré.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("Une erreur inconnue s'est produite.");
                break;
        }
    }

    function successCallback(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);

        alert('La position a bien été enregistrée !');

        displayButtons();
    }
};
