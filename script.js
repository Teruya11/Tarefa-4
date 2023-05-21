const body = document.querySelector("body");
const navi = document.querySelector(".navi");
const principal = document.querySelector(".principal");
const filmes = document.querySelector(".filmes");
const button = document.querySelector(".button");

function change_theme() {
    body.classList.toggle('dark_body');
    navi.classList.toggle('dark_navi');
    principal.classList.toggle('dark_principal');
    filmes.classList.toggle('dark_filmes');
    button.classList.toggle('dark_button');
}