let datos = [];
let gallery;
let currentPage = 1;
let itemsPerPage = 6;

window.onload = function() {
   createFakeData();
   gallery = document.querySelector(".gallery");
   renderPage(1);
   createPagination();
}

function createPagination(){
    let pagination = document.querySelector(".pagination");
    let pages = Math.ceil(datos.length / itemsPerPage);
    let buttons = "";
    buttons += `<li><a href="javascript:void(0);">&laquo;</a></li>`;
    for(let i = 1; i <= pages; i++){
        buttons += `<a href="javascript:void(0);" class="pag_item" onclick="renderPage(${i})">${i}</a>`;
    }
    buttons += `<li><a href="javascript:void(0);">&raquo;</a></li>`;

    pagination.innerHTML = buttons;

}

function renderPage(num){
    let start = num;
    let end = num+itemsPerPage;
    let data = datos.slice(start, end);
    renderCards({
        data: data
    });
}

function renderCards(obj){
    let cards = "";
    let data = obj.data;

    for(let i = 0; i < data.length; i++){
        cards += renderCard(data[i]);
    }
    gallery.innerHTML = cards;
}

function renderCard(obj){
    //Template literal cuando se usan las comillas francesas ``
    let card = `
    <section class="card">
        <div>
            <h3>${obj.nombre}</h3>
            <span>${obj.precio}</span>
            <span>${obj.cantidad}</span>
            <p>${obj.descripcion}</p>
            <a href="#" class="btn">Ver más</a>
        </div>
        <div>
            <img src="${obj.imagen}" alt="">
        </div>
    </section>`;
    return card;
}

function createFakeData(){
    datos.push({
        nombre: "Iphone 15", 
        precio: 1000, 
        cantidad: 5,
        descripcion: "El mejor celular del mercado", 
        imagen: "https://icons.iconarchive.com/icons/designcontest/ecommerce-business/128/iphone-icon.png"
    });
    datos.push({
        nombre: "Ipad mini", 
        precio: 700, 
        cantidad: 12,
        descripcion: "La mejor tablet del mercado", 
        imagen: "https://icons.iconarchive.com/icons/john-freeborn/ipad/128/iPad-flip-case-standing-icon.png"
    });
    datos.push({
        nombre: "Bicicleta Electrica", 
        precio: 3000, 
        cantidad: 15,
        descripcion: "Bicicleta electrica con bateria de litio", 
        imagen: "https://icons.iconarchive.com/icons/iconshock/global-warming/128/bicycle-icon.png"
    });
    datos.push({
        nombre: "Reloj inteligente", 
        precio: 1200, 
        cantidad: 5,
        descripcion: "Reloj inteligente con pantalla tactil", 
        imagen: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/128/American-Football-Flat-icon.png"
    });
    datos.push({
        nombre: "Televisor smart", 
        precio: 1000, 
        cantidad: 5,
        descripcion: "Televisor smart de 50 pulgadas", 
        imagen: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/128/Accordion-Flat-icon.png"
    });
    datos.push({
        nombre: "Nevera", 
        precio: 700, 
        cantidad: 12,
        descripcion: "Nevera de 2 puertas", 
        imagen: "https://icons.iconarchive.com/icons/heylove/vintage/128/vintage-fridge-green-icon.png"
    });
    datos.push({
        nombre: "Lavadora", 
        precio: 1000, 
        cantidad: 5,
        descripcion: " Lavaora de ropa de 10 kilos", 
        imagen: "https://icons.iconarchive.com/icons/iconshock/electrical-appliances/128/washing-machine-icon.png"
    });
    
    datos.push({
        nombre: "Camiseta", 
        precio: 1000, 
        cantidad: 5,
        descripcion: "Camiseta de algodon", 
        imagen: "https://icons.iconarchive.com/icons/michael/nike/128/Nike-Shirt-1-icon.png"
    });

    datos.push({
        nombre: "Cargador de portatil", 
        precio: 1000, 
        cantidad: 5,
        descripcion: "Cargador de portatil universal", 
        imagen: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-flat/128/Alien-Flat-icon.png"
    });
}

