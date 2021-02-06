import { createContext } from "react";

class Particle {
  constructor(x, y, ctx, color = "black") {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.ctx = ctx;
    this.color = color;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fill();
  }
  update(mouse) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirection = {
      x: dx / distance,
      y: dy / distance,
    };
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const direction = {
      x: forceDirection.x * force * this.density,
      y: forceDirection.y * force * this.density,
    };
    if (distance < mouse.radius) {
      this.x -= direction.x;
      this.y -= direction.y;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

export default Particle;
