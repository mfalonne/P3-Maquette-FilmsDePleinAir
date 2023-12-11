// Fonction pour gérer le clic de chaque bouton
var boutons = document.getElementsByClassName("boutonClic");

for (var i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function() {
        // Masquer tous les éléments cibles
        var elementsCibles = document.getElementsByClassName("elementCible");
        for (var j = 0; j < elementsCibles.length; j++) {
        elementsCibles[j].style.display = "none";
        }

        // Afficher l'élément cible associé au bouton cliqué
        var targetId = this.getAttribute("data-target");
        var elementCible = document.getElementById(targetId);
        elementCible.style.display = "block";
        });
}
// Tooltips   
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/**Reservation************ */
function submitForm() {
    // Vous pouvez ajouter ici la logique pour envoyer le formulaire à un serveur si nécessaire

    // Afficher un message de confirmation
    alert("Merci pour votre réservation! Nous avons bien reçu vos informations.");

    // Réinitialiser le formulaire (facultatif)
    document.getElementById("reservationForm").reset();

    // Empêcher le formulaire de se soumettre normalement
    return false;
}
/*******************Cookies********************* */
// Fonction pour accepter les cookies et masquer la fenêtre
function acceptCookies() {
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.right = "-300px"; // Masquer la fenêtre après acceptation
    // Ajoutez ici le code pour enregistrer la préférence de l'utilisateur, par exemple en utilisant des cookies.
    document.cookie = "cookieAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"; // Enregistre un cookie pour indiquer que la fenêtre a été acceptée
}

    // Fonction pour afficher la fenêtre avec animation
function showCookieContainer() {
    var cookieAccepted = getCookie("cookieAccepted");
    if (!cookieAccepted) {
        var cookieContainer = document.getElementById("cookieContainer");
            cookieContainer.style.right = "0";
    }
}
    
    // Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
    
// Affiche la fenêtre après le chargement de la page
window.onload = function() {
    showCookieContainer();
};
