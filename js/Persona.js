class Persona
{
    constructor(obj){
        this.nombre = obj?obj.nombre:"";
        this.apellido = obj?obj.apellido:"";
    }
    saludar(){
        console.log("Hola, soy " + this.nombre + " " + this.apellido);
    }
}