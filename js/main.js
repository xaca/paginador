let teclas;

window.onload = function() {
    teclas = document.getElementsByClassName('tecla');
    agregarEventos(teclas);
}

function agregarEventos(teclas){
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click', function(){
            let valor = this.innerHTML;
            alert('Presionaste la tecla: ' + valor );
        });
    }
}