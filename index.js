import plateform_1 from "./plateforms/plateform_1";

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

const player = new Player(50, 50, 25, "#ff0000"); // Joueur rouge
const platforms = [
  plateform_1, // Sol
];
platforms = plateform_1;


// Gestion clavier
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
  if (e.code === "ArrowUp" && player.onGround) {
    player.vy = player.jumpPower;
  }
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

  // Mise à jour et dessin
  player.update(platforms);
  player.draw();
  platforms.forEach(p => p.draw());

  requestAnimationFrame(gameLoop);
}

gameLoop();
