let paginator;

window.onload = function() {
   paginator = new Paginator({
    itemsPerPage:6,
    contenedor:document.querySelector(".pagination"),
    gallery:document.querySelector(".gallery"),
    data:FakeData.create()
   });
   paginator.createPagination();
}