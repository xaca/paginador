let teclas;
let pantalla;

window.onload = function() {
    pantalla = document.getElementById('pantalla');
    teclas = document.getElementsByClassName('tecla');
    agregarEventos(teclas);
    pantalla.value = '';
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