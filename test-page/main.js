import anime from './anime.es.js';


const canvas = document.querySelector('#hero-bg');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create matrix characters
const matrixCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const characters = matrixCharacters.split('');

// Set font size and columns
const fontSize = 16;
let columns = canvas.width / fontSize;

// Create matrix columns
const matrix = [];
for (let i = 0; i < columns; i++) {
    matrix[i] = 1;
}

// Draw matrix animation
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF41';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < matrix.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, matrix[i] * fontSize);

        if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
            matrix[i] = 0;
        }

        matrix[i]++;
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    drawMatrix();
}

// Start animation
animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = canvas.width / fontSize;

    for (let i = 0; i < columns; i++) {
        matrix[i] = 1;
    }

});
