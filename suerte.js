const cupones = [
    "Una cita en el cine 🎬",
    "Dejarte ganar en lo que sea (nee mi equipo) 🎮",
    "Unos besitos 💋",
    "Unos besotes 😘",
    "Un abachito💞",
    "Cita en cafetería",
    "Cita en el acuario 🐧",
    "Un muamuamuamua 👄",
    "Una cita a donde queya",
    "Eliminar al gallo de pelea",
    "Un ah ah ah ah 🔥",
    "Tu y yo toda le eternidad",
    "Evasión de pelea: repele la pelea y debemos amarnos mucho sisisis 🛡️💖",
    "Vale por abachote 🫂",
    "Comida favorita 🍔",
    "Romper distancia entre nosotras yadiosmio testaño",
    "Ver una peli juntitas💖",
    "Una tarde juntitas"
];

let cuponActualTexto = "";

// Al cargar la página, mostramos los guardados
document.addEventListener('DOMContentLoaded', cargarCuponesGuardados);

function revelarCupon() {
    const fraseAleatoria = cupones[Math.floor(Math.random() * cupones.length)];
    cuponActualTexto = fraseAleatoria;
    
    document.getElementById('texto-cupon').innerText = fraseAleatoria;
    document.getElementById('galletas-flex').classList.add('hidden');
    document.getElementById('cupon-resultado').classList.remove('hidden');
    
    // Reactivar botón de guardar
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.innerText = "📥 Guardar en mi billetera para usar después";
    btnGuardar.disabled = false;
    btnGuardar.style.background = "#ff8fa3";

    lanzarConfeti();
}

function resetGalletas() {
    document.getElementById('galletas-flex').classList.remove('hidden');
    document.getElementById('cupon-resultado').classList.add('hidden');
}

// --- FUNCIÓN PARA GUARDAR ---
function guardarCupon() {
    // 1. Obtener lo que ya hay guardado
    let guardados = JSON.parse(localStorage.getItem('misCuponesSofi')) || [];
    
    // 2. Agregar el nuevo
    guardados.push(cuponActualTexto);
    
    // 3. Guardar de nuevo en el navegador
    localStorage.setItem('misCuponesSofi', JSON.stringify(guardados));
    
    // 4. Actualizar la lista visual
    cargarCuponesGuardados();
    
    // 5. Feedback visual en el botón
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.innerText = "¡Guardado! ✅";
    btnGuardar.disabled = true;
    btnGuardar.style.background = "#4ecdc4";
}

// --- FUNCIÓN PARA MOSTRAR LISTA ---
function cargarCuponesGuardados() {
    let guardados = JSON.parse(localStorage.getItem('misCuponesSofi')) || [];
    const contenedor = document.getElementById('lista-cupones');
    
    if (guardados.length === 0) {
        contenedor.innerHTML = '<p id="mensaje-vacio">Aún no has guardado cupones...</p>';
        return;
    }

    let html = '';
    guardados.forEach((cupon, index) => {
        html += `
            <div class="mini-ticket">
                <span>${cupon}</span>
                <button class="btn-usar" onclick="usarCupon(${index})">Usar</button>
            </div>
        `;
    });
    contenedor.innerHTML = html;
}

// --- FUNCIÓN PARA USAR (BORRAR UNO) ---
function usarCupon(index) {
    if(!confirm("¿Segura que quieres usar este cupón ahora? Desaparecerá de la lista. (Tómale foto)")) return;

    let guardados = JSON.parse(localStorage.getItem('misCuponesSofi')) || [];
    guardados.splice(index, 1); // Borra el elemento en esa posición
    localStorage.setItem('misCuponesSofi', JSON.stringify(guardados));
    cargarCuponesGuardados();
}

// --- FUNCIÓN PARA BORRAR TODO ---
function borrarTodo() {
    if(confirm("¿Borrar todos los cupones guardados?")) {
        localStorage.removeItem('misCuponesSofi');
        cargarCuponesGuardados();
    }
}

// --- CONFETI ---
function lanzarConfeti() {
    var count = 200;
    var defaults = { origin: { y: 0.7 }, zIndex: 9999 };
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
