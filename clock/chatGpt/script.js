function updateDigitalClock() {
    const digitalClock = document.getElementById('digitalClock');
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateDigitalClock, 1000);

// Initial update
updateDigitalClock();
