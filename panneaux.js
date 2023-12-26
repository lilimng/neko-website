const cat2 = document.querySelector('.cat2')
const cat3 = document.querySelector('.cat3')
const cat4 = document.querySelector('.cat4')
const cat5 = document.querySelector('.cat5')
const cat6 = document.querySelector('.cat6')

cat2.addEventListener('click',() =>{
    cat2.classList.toggle('ouvert')
    cat3.classList.remove('ouvert')
    cat4.classList.remove('ouvert')
    cat5.classList.remove('ouvert')
    cat6.classList.remove('ouvert')
})

cat3.addEventListener('click',() =>{
    cat2.classList.remove('ouvert')
    cat3.classList.toggle('ouvert')
    cat4.classList.remove('ouvert')
    cat5.classList.remove('ouvert')
    cat6.classList.remove('ouvert')
})

cat4.addEventListener('click',() =>{
    cat2.classList.remove('ouvert')
    cat3.classList.remove('ouvert')
    cat4.classList.toggle('ouvert')
    cat5.classList.remove('ouvert')
    cat6.classList.remove('ouvert')
})

cat5.addEventListener('click',() =>{
    cat2.classList.remove('ouvert')
    cat3.classList.remove('ouvert')
    cat4.classList.remove('ouvert')
    cat5.classList.toggle('ouvert')
    cat6.classList.remove('ouvert')
})

cat6.addEventListener('click',() =>{
    cat2.classList.remove('ouvert')
    cat3.classList.remove('ouvert')
    cat4.classList.remove('ouvert')
    cat5.classList.remove('ouvert')
    cat6.classList.toggle('ouvert')
})