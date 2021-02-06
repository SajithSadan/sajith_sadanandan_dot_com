import React, { useState, useEffect } from "react";
import Particle from "../utils/Particle";

const BannerCanvas = () => {
  const [bCanvas, setBCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  let textCoords;
  const particleArray = [];

  const mouse = {
    x: null,
    y: null,
    radius: 150,
  };
  const aujust = {
    x: window.innerWidth / 500,
    y: -window.innerHeight / 500,
  };

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const animate = () => {
    ctx.clearRect(0, 0, bCanvas.width, bCanvas.height);
    particleArray.forEach((particle) => {
      particle.draw();
      particle.update(mouse);
    });
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    setBCanvas(document.getElementById("bannerCanvas"));
  }, []);

  useEffect(() => {
    if (bCanvas) {
      setCtx(bCanvas.getContext("2d"));

      bCanvas.width = window.innerWidth;
      bCanvas.height = 500;
    }
  }, [bCanvas]);

  useEffect(() => {
    if (ctx) {
      ctx.fillStyle = "black";
      ctx.font = "20px Verdana";
      ctx.fillText("Sajith", 0, 40);
      ctx.font = "18px Verdana";
      ctx.fillText("Sadanandan", 0, 60);
      textCoords = ctx.getImageData(0, 0, bCanvas.width, 100);

      // draw particles
      for (let y = 0, y2 = textCoords.height; y < y2; y++) {
        for (let x = 0, x2 = textCoords.width; x < x2; x++) {
          if (textCoords.data[y * 4 * textCoords.width + x * 4 + 3] > 128) {
            const posX = x + aujust.x;
            const posY = y + aujust.y;
            particleArray.push(new Particle(posX * 6, posY * 6, ctx, "black"));
          }
        }
      }
      animate();
    }
  }, [ctx]);

  return (
    <div onMouseMove={handleMouseMove}>
      <canvas id="bannerCanvas"></canvas>
    </div>
  );
};

export default BannerCanvas;
