const burger=document.querySelector('.burger');
const navbar=document.querySelector('.navbar');
const logo=document.querySelector('.nav-logo')
const navlist=document.querySelector('.nav-list');
const search=document.querySelector('.nav-search');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-class');
    logo.classList.toggle('v-class')
    navlist.classList.toggle('v-class');
    search.classList.toggle('v-class');
})