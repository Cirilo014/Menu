
/* O codigo abaixo e aplicado para adicionar
    eventos de Listener, ou seja quando notar
    ou ouvir que houve uma determinada accao de clique na pagina
*/
const mb = document.querySelector('.menu-mobile');
document.addEventListener('click', (event) =>{
    const et = event.target;
    if(et.classList.contains('open')){
        mb.style.top = '4rem';
    }

    if(et.classList.contains('close')){
        mb.style.top = '-12rem';
    }
})