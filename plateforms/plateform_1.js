
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

const plateform_1 = [
  new Platform(0, 580, 800, 20),       // sol
  new Platform(300, 450, 200, 20),
  new Platform(150, 350, 100, 20),
  new Platform(250, 250, 150, 20),
  new Platform(550, 250, 150, 20),
  new Platform(750, 150, 50, 20),
  new Platform(580, 50, 50, 20),
  new Platform(480, 20, 50, 20),
];

export { Platform, Platform_sol, plateform_1 };

caca = (153, 135, 64, 64)