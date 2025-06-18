const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const body = document.querySelector('body');

body.style.background = "";
canvas.style.background = "#87CEEB";
class Player {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.jumpPower = -15;
    this.gravity = 0.8;
    this.onGround = false;
  }

  update(platforms) {
    // Mouvement horizontal
    this.x += this.vx;

    // Gravité
    this.vy += this.gravity;
    this.y += this.vy;

    // Collision avec plateformes
    this.onGround = false;
    for (let platform of platforms) {
      if (this.collidesWith(platform)) {
        if (this.vy > 0) {
          this.y = platform.y - this.size;
          this.vy = 0;
          this.onGround = true;
        }
      }
    }
  }

  collidesWith(rect) {
    return (
      this.x < rect.x + rect.width &&
      this.x + this.size > rect.x &&
      this.y < rect.y + rect.height &&
      this.y + this.size > rect.y
    );
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

class Platform {
  constructor(x, y, width, height, color = "rgb(60, 60, 60)") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class Platform_sol {
  constructor(x, y, width, height, color = "rgba(104, 221, 86, 0.7)") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class platform_win_1 {
  constructor(x, y, width, height, color = "yellow") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class platform_win_2 {
  constructor(x, y, width, height, color = "yellow") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Player(50, 50, 25, "#ff0000"); // Joueur rouge

let platforms = [
  new Platform_sol(0, 580, 800, 20),       // sol
  new Platform(300, 450, 200, 20),
  new Platform(150, 350, 100, 20),
  new Platform(250, 250, 150, 20),
  new Platform(550, 250, 150, 20),
  new Platform(650, 200, 150, 20),
  new Platform(550, 100, 50, 20),
  new platform_win_1(500, 0, 150, 20),
];

const platform_fin = platforms[7]
// const platform_final = platform_win


// Gestion clavier

  const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
    if (e.code === "ArrowUp" && player.onGround) {
      player.vy = player.jumpPower;
    }
    if (e.code === "ArrowUp" && player.onGround) {
      player.color = "yellow"
    }
    if (e.code === "KeyE" && keys["Space"] && player.onGround) {
      player.vy = player.jumpPower * 2;
    }
    // si il appuit sur la touche espace et la touche e il saute deux fois plus haut
});
  document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});



// Boucle principale
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Gérer les touches
  player.vx = 0;
    if (keys["ArrowLeft"]) player.vx = -player.speed;
    if (keys["ArrowRight"]) player.vx = player.speed;

    // image du personnage 
    if (keys["ArrowLeft"]) player.color = "blue";
    if (keys["ArrowRight"]) player.color = "red";
    
  
  

  // Mise à jour et dessin
  player.update(platforms);
  player.draw();
  platforms.forEach(p => p.draw());

  requestAnimationFrame(gameLoop);
}

gameLoop();


// reinisialiser le joueur avec la touche R
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyR") {
    player.x = 50; // Réinitialiser la position du joueur
    player.y = 50;
    player.vx = 0;
    player.vy = 0;
    player.onGround = false;
  }
}); 


// si player touche la couleur jaune il gagne
let score = document.querySelector('.score');
let s = 0

setInterval(() => {
  if (player.collidesWith(platform_fin)) {
    // alert("Vous avez gagné !");
    // window.location.href = 'win.php';
    s++
    score.innerHTML = s
    player.x = 50; // Réinitialiser la position du joueur
    player.y = 50;
    player.vx = 0;
    player.vy = 0;
    player.onGround = false;
    platforms = [
      new Platform_sol(0, 580, 800, 20),       // sol
      new Platform(300, 450, 200, 20),
      new Platform(150, 350, 100, 20),
      new Platform(250, 250, 150, 20),
      new Platform(550, 250, 150, 20),
      new Platform(750, 150, 50, 20),
      new Platform(580, 50, 50, 20),
      new platform_win_2(500, 0, 150, 20),
    ];
  }
}, 100); // Vérifie toutes les 100 ms


// affficher la page win.php qunad il gagne
// setInterval(() => {
//   if (player.collidesWith(platform_fin)) {
//     window.location.href = 'win.php';
//     // alert("Vous avez gagné !");
//     fetch('win.php')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('result').innerHTML = data;
//     })
//     .catch(error => {
//       console.error('Erreur lors du chargement :', error);
//     });

//   }
// }, 100); // Vérifie toutes les 100 ms
