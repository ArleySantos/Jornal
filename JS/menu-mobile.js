export default function menuMobile(){

    const botao = document.querySelector('[data-menu="btn"]');
    const navMobal = document.querySelector('.mobile-nav');

    function addevent(){
    navMobal.classList.toggle('ativo');
    }


    botao.addEventListener('click', addevent);
}




