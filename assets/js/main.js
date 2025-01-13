// Récupérer le formulaire et le champ email
const form = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");

// Fonction pour valider si l'email correspond à "ash@loremcompany.com"
function validateEmail(email) {
  const allowedEmail = "ash@loremcompany.com"; // Email autorisé
  return email === allowedEmail; // Vérifie si l'email est exactement égal
}

// Écouteur d'événement pour le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi par défaut du formulaire

  const email = emailInput.value.trim(); // Récupère et nettoie la valeur de l'email

  // Vérifie si l'email est valide
  if (validateEmail(email)) {
    // Redirige vers la page confirmation.html si l'email est valide
    window.location.href = "confirmation.html";
  } else {
    // Affiche un message d'erreur si l'email est invalide
    alert('Seule l\'adresse email "ash@loremcompany.com" est acceptée.');
  }
});
