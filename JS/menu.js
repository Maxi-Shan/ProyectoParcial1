const logo = document.querySelector('.menu')
const menu = document.querySelector('.menu-navegacion')


logo.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != logo){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})