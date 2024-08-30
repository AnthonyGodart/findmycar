document.addEventListener('DOMContentLoaded', function() {
    displayButtons();
});

function displayButtons() {
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');

    const setButton = document.getElementById('set').parentElement; // Bouton "Enregistrer la position"
    const findButton = document.getElementById('find').parentElement; // Bouton "Retrouver ma voiture"
    const deleteButton = document.getElementById('delete').parentElement; // Bouton "Effacer la position"

    // Si des coordonnées sont enregistrées
    if (lat !== null && lng !== null) {
        setButton.style.display = 'none'; // Masquer le bouton "Enregistrer"
        findButton.style.display = 'inline-block'; // Afficher le bouton "Retrouver"
        deleteButton.style.display = 'inline-block'; // Afficher le bouton "Effacer"
    } else {
        setButton.style.display = 'inline-block'; // Afficher le bouton "Enregistrer"
        findButton.style.display = 'none'; // Masquer le bouton "Retrouver"
        deleteButton.style.display = 'none'; // Masquer le bouton "Effacer"
    }
};
