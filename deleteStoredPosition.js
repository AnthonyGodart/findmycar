function deleteStoredPosition() {
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    
    if(lat !== null && lng !== null) {
        const confirmDeleteStoredPosition = confirm('Attention ! Cette action va effacer les coordonnées enregistrées. Confirmez-vous ce choix ?');

        if(!confirmDeleteStoredPosition) {
            return;
        }

        localStorage.removeItem('lat');
        localStorage.removeItem('lng');

        alert('Les coordonnées ont été supprimées avec succès.');

        displayButtons();
    }
}