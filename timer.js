const timer = document.querySelector('.timer');
let minutes = 10;
timer.innerHTML = minutes;

// alert('Le temps est écoulé ! Vous avez fait ' + score + ' points ! Veuillez rafraîchir la page pour recommencer.');

// ajoute 1 au timer toutes les secondes jusqu'à ce que minutes soit égal à 0 et apres affiche un message d'alerte
const countdown = setInterval(() => {
  if (minutes > 0) {
    minutes--;
    timer.innerHTML = minutes;
  } else {
    clearInterval(countdown);
    alert('Le temps est écoulé ! Veuillez rafraîchir la page pour recommencer.');
  }
}, 60000); // 60000 ms = 1 minute
