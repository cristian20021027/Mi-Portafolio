let menuVisible = false;
//Funcion que oculta el menu y lo muestra//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Oculta el menu posteriormente de selecionar una opcion//
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion de las habilidades XD//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Javascripts");
        habilidades[1].classList.add("Html5");
        habilidades[2].classList.add("CSS3");
        habilidades[3].classList.add("Photoshop");
        habilidades[4].classList.add("Wordpress");
        habilidades[5].classList.add("Trabajo");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion")
        habilidades[9].classList.add("manager")
    }
}
// se detecta el scrool para aplicar la animacion//
window.onscroll = function(){
    efectoHabilidades();
}
function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');       loaderSection.classList.add('loaded');
}
document.onload = pageLoaded();