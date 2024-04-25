let teclas, btn_borrar;
let pantalla;

const teclado = document.getElementById('teclado');
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

window.onload = function() {
    pantalla = document.getElementById('pantalla');
    teclas = document.getElementsByClassName('item');
    btn_borrar = document.querySelector('.borrar');
    pantalla.value = '';
    
    btn_borrar.addEventListener('click', function(){ pantalla.value = ''; });
    
    // Generar el teclado aleatorio al cargar la página
    generarTeclado();
    agregarEventos(teclas);
}

function agregarEventos(teclas){
    let tecla;
    for (let i = 0; i < teclas.length; i++) 
    {
        tecla = teclas[i];
        tecla.setAttribute('valor', numeros[i]);
        tecla.addEventListener('click', function(event){
            let valor = event.target.getAttribute('valor');

            if(pantalla.value.length<10)
            {
                pantalla.value += valor;
            }
        });
        tecla.addEventListener('mouseover', (event) => {
            //event.target.textContent = '*';
            ponerAsteriscos();
        });

        tecla.addEventListener('mouseout', (event) => {
            /*let temp = event.target;
            temp.textContent = temp.getAttribute('valor');*/
            mostrarNumeros();
        });
    }
}

function mostrarNumeros(){
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].innerHTML = numeros[i];
    }
}

function ponerAsteriscos(){
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].innerHTML = '*';
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