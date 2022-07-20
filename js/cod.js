let btnhamburguer=document.getElementById('btnhamburguer')
let btnclose=document.getElementById('btnclose')
let navAddClass=document.getElementById('nav')

btnhamburguer.addEventListener('click', e=>{
    navAddClass.classList.add('main__responsive')
})

btnclose.addEventListener('click', e=>{
    navAddClass.classList.remove('main__responsive')
    
})

let ctr__left=document.getElementById('ctr__left')

ctr__left.addEventListener('click', e=>{
    alert("dgdsgdgdg")
})