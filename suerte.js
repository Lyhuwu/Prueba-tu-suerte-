const cupones = [
    "Una cita en el cine 🎬",
    "Dejarte ganar en lo que sea (nee mi equipo) 🎮",
    "Unos besitos 💋",
    "Unos besotes 😘",
    "Un muamuamuamua 👄",
    "Un ah ah ah ah 🔥",
    "Evasión de pelea, repele la pelea y debemos amarnos mucho sisisis 🛡️💖"
];

function revelarCupon() {
    const fraseAleatoria = cupones[Math.floor(Math.random() * cupones.length)];
    document.getElementById('texto-cupon').innerText = fraseAleatoria;
    
    // Ocultar galletas y mostrar el resultado
    document.getElementById('galletas-flex').classList.add('hidden');
    document.getElementById('cupon-resultado').classList.remove('hidden');

    // ¡Lanzar el confeti!
    dispararConfeti();
}

function resetGalletas() {
    document.getElementById('galletas-flex').classList.remove('hidden');
    document.getElementById('cupon-resultado').classList.add('hidden');
}

function dispararConfeti() {
    // Esto lanza confeti desde los dos lados de la pantalla
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
