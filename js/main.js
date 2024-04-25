let teclas;
let pantalla;

const teclado = document.getElementById('teclado');
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

window.onload = function() {
    pantalla = document.getElementById('pantalla');
    teclas = document.getElementsByClassName('tecla');
    agregarEventos(teclas);
    pantalla.value = '';

    /*for (let i = 0; i < teclas.length; i++) {
        teclas[i].innerHTML = '*';
    } */

    // Generar el teclado aleatorio al cargar la página
    generarTeclado();
}

function agregarEventos(teclas){
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click', function(){
            let valor = this.innerHTML;
            if(pantalla.value.length<10)
            {
                pantalla.value += valor;
            }
        });
    }
}

// Función para barajar un array unsort
function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generarTeclado() {
    
    barajarArray(numeros);
    for (let i = 0; i < teclas.length; i++) {
        const tecla = teclas[i];
        tecla.textContent = numeros[i];
    }
  }