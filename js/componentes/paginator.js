class Paginator{
    constructor(obj){
        this.currentPage = obj.currentPage?obj.currentPage:1;
        this.itemsPerPage = obj.itemsPerPage?obj.itemsPerPage:6;
        this.pages_items = undefined;
        this.btn_before = undefined;
        this.btn_next = undefined;
        this.contenedor = obj.contenedor;
        this.gallery = obj.gallery;
        this.data = obj.data?obj.data:[];
    }

    createPagination(){
        let pages = Math.ceil(this.data.length / this.itemsPerPage);
        let buttons = "";
        buttons += `<li><a href="javascript:void(0);" id="btn_before">&laquo;</a></li>`;
        for(let i = 1; i <= pages; i++){
            buttons += `
            <li>
                <a href="javascript:void(0);" 
                class="pag_item ${(i==1)?'selected':''}" 
                page="${i}" >
                    ${i}
                </a>
            </li>`;
        }
        buttons += `<li><a href="javascript:void(0);" id="btn_next">&raquo;</a></li>`;
    
        this.contenedor.innerHTML = buttons;
        this.pages_items = document.querySelectorAll(".pag_item");
        this.btn_before = document.getElementById("btn_before");
        this.btn_next = document.getElementById("btn_next");
        this.btn_next.addEventListener("click",this.next.bind(this));
        this.btn_before.addEventListener("click",this.before.bind(this));
        this.renderPage.call(this);
        this.asignarEventosPaginas.call(this);
    }
    asignarEventosPaginas(){
        for(let i = 0; i < this.pages_items.length; i++){
            this.pages_items[i].addEventListener("click",
            this.renderPage.bind(this,this.pages_items[i]));
        }
    }
    removeSelected(){
        if(!this.pages_items)return;
        for(let i = 0; i < this.pages_items.length; i++){
            this.pages_items[i].classList.remove("selected");
        }
    }
    
    next(){
        if(this.currentPage == this.pages_items.length)return;
        let next = this.currentPage+1;
        this.renderPage.call(this,this.pages_items[next-1]);
    }
    
    before(){
        if(this.currentPage == 1)return;
        let before = this.currentPage-1;
        this.renderPage.call(this,this.pages_items[before-1]);
    }
    
    renderPage(obj){
        
        let num = obj?parseInt(obj.getAttribute("page")):1;
        let start = (num-1)*this.itemsPerPage;
        let end = start+this.itemsPerPage;
        let data = this.data.slice(start, end);
        this.currentPage = num;
        this.renderCards.call(this,{
            data: data
        });
        if(obj){
            this.removeSelected.call(this);
            obj.classList.add("selected");
        }
        if(this.currentPage == 1){
            this.btn_before.classList.add("disabled");
        }
        else{
            this.btn_before.classList.remove("disabled");
        }
        if(this.currentPage == this.pages_items.length){
            this.btn_next.classList.add("disabled");
        }
        else{
            this.btn_next.classList.remove("disabled");
        }
    }
    
    renderCards(obj){
        let cards = "";
        let data = obj.data;
        
        for(let i = 0; i < data.length; i++){
            cards += this.renderCard(data[i]);
        }
        this.gallery.innerHTML = cards;
    }
    
    renderCard(obj){
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
}