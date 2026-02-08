const cupones = [
    "Una cita en el cine 🎬",
    "Dejarte ganar en lo que sea (nee mi equipo) 🎮",
    "Unos besitos 💋",
    "Unos besotes 😘",
    "Un muamuamuamua 👄",
    "Un ah ah ah ah 🔥",
    "Evasión de pelea: repele la pelea y debemos amarnos mucho sisisis 🛡️💖"
];

function revelarCupon() {
    const fraseAleatoria = cupones[Math.floor(Math.random() * cupones.length)];
    document.getElementById('texto-cupon').innerText = fraseAleatoria;
    
    // Ocultar galletas y mostrar resultado
    document.getElementById('galletas-flex').classList.add('hidden');
    document.getElementById('cupon-resultado').classList.remove('hidden');

    // Lanzar confeti
    lanzarConfeti();
}

function resetGalletas() {
    document.getElementById('galletas-flex').classList.remove('hidden');
    document.getElementById('cupon-resultado').classList.add('hidden');
}

function lanzarConfeti() {
    // Configuración para que se vea bien en celular (explosión desde el centro)
    var count = 200;
    var defaults = {
        origin: { y: 0.7 },
        zIndex: 9999
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
