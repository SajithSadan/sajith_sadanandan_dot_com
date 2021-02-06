import React, { useState, useEffect } from "react";
import Particle from "../utils/Particle";

const styles = {
  h2: {
    color: "#fff",
    fontWeight: "300",
    position: "absolute",
    bottom: "17%",
    left: "18px",
  },
};

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
  const adjust = {
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
            const posX = x + adjust.x;
            const posY = y + adjust.y;
            particleArray.push(
              new Particle(posX * 6, posY * 6, ctx, "#4AD7D1")
            );
          }
        }
      }
      animate();
    }
  }, [ctx]);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <canvas id="bannerCanvas"></canvas>
      <h1 style={styles.h2}>A Fullstack Developer</h1>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5103AQGspWRh3yBFZw/profile-displayphoto-shrink_800_800/0/1566117161325?e=1617840000&v=beta&t=79TEq45HnP0XqlD-scFCOeymPziaI6Hi9NBWjHjjYFc"
        alt="Sajith Sadanandan"
        className="photo"
      />
    </div>
  );
};

export default BannerCanvas;
