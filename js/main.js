//javascript puro
//let botao = document.querySelector('.menu-principal__btn');
//let menuPrincipal = document.querySelector('.menu-principal');

//botao.addEventListener("click", abreFechaMenu);

//function abreFechaMenu(evento){
//    menuPrincipal.classList.toggle('menuPrincipal--fechado');
//}

//jquery
$(document).ready(function(){
    // Botão do menu
    $('.menu-principal__btn').click(function(){
        $('.menu-principal').toggleClass('menu-principal--fechado');
    });

  //Slide depoimentos
  $('.depoimentos__caixa').slick({
      autoplay: true,
      arrows: false,
      dots: true,

    }); 
}); $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
				