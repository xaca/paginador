let persona;

/*window.onload = function() {
    persona = {};//Creación de un objeto vacío
    // Propiedades 
    persona.nombre = "Juan"; //Asignación de una propiedad al objeto
    persona.apellido = "Pérez"; //Asignación de una propiedad al objeto
    persona.edad = 30; //Asignación de una propiedad al objeto
    persona.direccion = "Calle 123"; //Asignación de una propiedad al objeto
    persona.telefono = "123456789"; //Asignación de una propiedad al objeto
    persona.email = "admin@upb.edu.co"; //Asignación de una propiedad al objeto

    // Métodos
    
    persona.saludar = function() {
        //console.log(this.nombre + " " + this.apellido);
        if(this.nombre && this.apellido)
        {
            alert("Hola, soy " + this.nombre + " " + this.apellido);
        }
    }; //Asignación de un método al objeto

    persona.saludar = ()=>alert("Otra cosa");//Reasignacion de la función saludar

    persona.hablar = (mensaje)=>alert(mensaje); //Asignación de un método al objeto, usando arrow function
    //alert(persona);
    persona.saludar(); //Llamado a un método del objeto
    persona.hablar("Estoy hablando en español"); //Llamado a un método del objeto

    //Eliminación de una propiedad
    //delete persona.telefono;

    //Eliminación de una propiedad
    //persona.email = undefined;

    //Recorrido de las propiedades del objeto
    //for (let propiedad in persona) console.log(propiedad + ": " + persona[propiedad]);

    persona.saludar();

}*/

//(function(){alert("hola");})() //Función anónima autoinvocada
(function(){
    let puntaje = 0;
    
    function incrementarPuntaje(puntos){
        puntaje += puntos;
        alert(puntaje);
    }
})();

/*

        Tabla de verdad
                        AND       OR       NOT
    p         q        p && q   p || q      !p
    true      true     true      true     false
    true      false    false     true     false
    false     true     false     true     true
    false     false    false     false    true

    false: undefined, null, 0, false, NaN, ""
    true: cualquier valor diferente de false
*/