document.addEventListener('DOMContentLoaded', () => {
    // Clock functionality
    const timeDisplay = document.getElementById('time');

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);

    // Background Particles Effect
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2px and 10px
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random starting position
        const startX = Math.random() * 1920;
        const startY = Math.random() * 1080;
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;

        // Random animation duration and delay
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        // Movement distance
        const moveX = (Math.random() - 0.5) * 400;
        const moveY = (Math.random() - 0.5) * 400;

        // Set CSS variables for animation
        particle.style.setProperty('--moveX', `${moveX}px`);
        particle.style.setProperty('--moveY', `${moveY}px`);

        // Setup animation
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;

        particlesContainer.appendChild(particle);
    }

    // Inject dynamic keyframes for particle animation
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes float {
            0% {
                transform: translate(0, 0);
                opacity: 0.1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translate(var(--moveX), var(--moveY));
                opacity: 0.1;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
});