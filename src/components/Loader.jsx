import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const dots = [];
  const letters = [];
  let width, height, startDotCount, currentDotCount;
  let mousePos = [-500, -500];
  let isScreenClear = false;
  let loadingText;

  // Define amplitude, frequency, visibleDuration, and invisibleDuration
  const amplitude = 400;
  const frequency = 0.075;
  const visibleDuration = 6000;
  const invisibleDuration = 3000;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext('2d');

    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    startDotCount = width > 640 ? 300 : 200;
    currentDotCount = 0;

    canvas.width = width;
    canvas.height = height;

    if (window.devicePixelRatio > 1) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      canvas.style.width = canvasWidth;
      canvas.style.height = canvasHeight;

      ctxRef.current.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    init();
    const clearScreenInterval = setInterval(() => {
      clearScreen();
    }, isScreenClear ? invisibleDuration : visibleDuration);

    return () => clearInterval(clearScreenInterval);
  }, []);

  const clearScreen = () => {
    isScreenClear = !isScreenClear;

    if (!isScreenClear) {
      createDots();
    }
  };

  const createDots = () => {
    for (let i = 0; i <= startDotCount; i++) {
      let dot = new Dot({
        ctx: ctxRef.current,
        color: !!Math.floor(Math.random() * 4) ? [0, 0, 0] : [255, 255, 0],
        startTime: window.performance.now(),
        frequency: frequency,
        maxAmplitude: amplitude,
        maxSize: Math.random() * 30,
        maxSpeed: Math.random() * 0.45 / (width > 640 ? 3 : 4),
        section: Math.random() * 5 / 2 + 1,
        fill: true,
        endFunc: function () { this.x = Math.random() * this.size - this.size * 2; },
        removeFunc: function () {
          dots.splice(dots.indexOf(this), 1);
          currentDotCount--;
        }
      });

      dots.push(dot);
      currentDotCount++;
    }
  };

  const draw = () => {
    requestAnimationFrame(draw);

    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, width, height);

    for (let i = currentDotCount; i > 0; i--) {
      dots[i].draw();

      if (startDotCount / 2 === i) {
        loadingText.draw();
      }
    }
  };

  let init = () => {
    createDots();
    loadingText = new LoadingText();
    draw();
    setTimeout(clearScreen, visibleDuration);
  };

  const mousemove = e => { mousePos = [e.pageX, e.pageY]; };
  const mouseleave = e => { mousePos = [-5000, -5000]; };

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseleave', mouseleave);
  window.addEventListener('touchmove', mousemove);
  window.addEventListener('touchend', mouseleave);
  window.addEventListener('touchstart', e => { e.preventDefault(); });

  Math.easeInOutCubic = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };

  return <canvas ref={canvasRef}></canvas>;
};

class Dot {
  constructor(opts) {
    // Implementation of Dot class...
  }
}

class LoadingText {
  constructor() {
    // Implementation of LoadingText class...
  }

  draw() {
    // Implementation of draw method...
  }
}

export default Loader;
