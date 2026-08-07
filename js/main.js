// Fonction pour basculer visibilité
function toggle(inputId) {
  const eye1 = document.getElementById("togglePassword");
  const pass1 = document.getElementById("password1");
  const eye2 = document.getElementById("toggleConfirm");
  const pass2 = document.getElementById("password2");

  eye1.addEventListener("click", () => {
    // bascule entre 'password' et 'text'
    pass1.type = pass1.type === "password" ? "text" : "password";
  });
  eye2.addEventListener("click", () => {
    // bascule entre 'password' et 'text'
    pass2.type = pass2.type === "password" ? "text" : "password";
  });
}

// Attacher l'événement à chaque icône
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    toggle("password");
  });

document.getElementById("toggleConfirm").addEventListener("click", function () {
  toggle("confirmPassword");
});
/*controle les étoiles (avis) page index*/
const stars = document.querySelectorAll(".note-stars span");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = star.dataset.value;

    stars.forEach((s) => {
      s.classList.toggle("selected", s.dataset.value <= rating);
    });
  });
});
/*controle page inscription*/
function verif() {
  nom = document.getElementById("nom").value.trim();
  prenom = document.getElementById("prenom").value.trim();
  email = document.getElementById("email").value;

  let forbidden = /[<>\"\'\;\(\)]/;
  if (forbidden.test(nom) || forbidden.test(prenom) || forbidden.test(email)) {
    alert("Caractères interdits détectés !");
    return false;
  }
  if (nom.length < 3 || alpha(nom) == false) {
    alert("nom invalide");
    return false;
  }
  if (prenom.length < 3 || alpha(prenom) == false) {
    alert("nom invalide");
    return false;
  }
  // 🔒 Email réel
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Email non valide");
    return false;
  }

  // 🔒 Mot de passe fort
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Mot de passe faible");
    return false;
  }

  return true; // autorise l'envoi
}

function alpha(x) {
  test = true;
  for (let i = 0; i < x.length; i++)
    if (x[i].toUpperCase() < "A" || x[i].toUpperCase() > "Z") {
      test = false;
      break;
    }
  return test;
}
