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
    
    // Ocultar galletas y mostrar cupón
    document.getElementById('galletas-flex').classList.add('hidden');
    document.getElementById('cupon-resultado').classList.remove('hidden');
}

function resetGalletas() {
    document.getElementById('galletas-flex').classList.remove('hidden');
    document.getElementById('cupon-resultado').classList.add('hidden');
}
