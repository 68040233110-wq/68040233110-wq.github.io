// === Typing Effect ===
const textElement = document.getElementById('typing-text');
const phrases = [
  "I write Code & Compose Music. 🎵",
  "I build Games with Unity & Logic. 🎮",
  "I draw Dreams with Clip Studio Paint. 🎨"
];
let pIndex = 0;
let cIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = phrases[pIndex];
  if (isDeleting) {
    textElement.innerText = current.substring(0, cIndex - 1);
    cIndex--;
  } else {
    textElement.innerText = current.substring(0, cIndex + 1);
    cIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && cIndex === current.length) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && cIndex === 0) {
    isDeleting = false;
    pIndex = (pIndex + 1) % phrases.length;
    speed = 500;
  }
  setTimeout(typeLoop, speed);
}

// Start typing effect after 1 second
setTimeout(typeLoop, 1000);

// === Contribution Graph Generator (Blue & Pink) ===
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById('graph-grid');
  if (grid) {
    for (let i = 0; i < 364; i++) {
      const pixel = document.createElement('div');
      const rand = Math.random();
      let cls = 'pixel';

      // Logic for colors similar to GitHub contribution but with Neon theme
      if (rand > 0.90) cls += ' pink-glow'; // Bright Pink
      else if (rand > 0.80) cls += ' blue-glow'; // Bright Blue
      else if (rand > 0.70) cls += ' med-pink';
      else if (rand > 0.55) cls += ' med-blue';

      pixel.className = cls;
      grid.appendChild(pixel);
    }
  }
});