const personas = [];
window.onload = function() {
    personas.push(
      new Persona({
        nombre:'Juan',
        apellido:'Perez'
    }));
    personas.push(
        new Persona({
        nombre:'Daniela',
        apellido:'Perez'
    }));

    for(let i in personas)
    {
        console.log(personas[i].saludar());
    }
}