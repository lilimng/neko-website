const burger = document.querySelector('.burger')
const liens = document.querySelector('.liens')
const menu = document.querySelector('.menu')

burger.addEventListener('click', ()=>{

    liens.classList.toggle('visible')
    menu.classList.toggle('visible')

})
