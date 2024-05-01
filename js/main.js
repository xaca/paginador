import Paginator from "./componentes/paginator.js";
import FakeData from "./componentes/fake.data.js";

let paginator;

window.onload = function() {
   paginator = new Paginator({
    itemsPerPage:8,
    contenedor:document.querySelector(".pagination"),
    gallery:document.querySelector(".gallery"),
    data:FakeData.create()
   });
   paginator.createPagination();
}
