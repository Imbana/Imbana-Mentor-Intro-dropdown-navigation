const company = document.querySelector("#company")
const feature = document.querySelector("#feature")
const navMenuMovil = document.querySelector("#navMenuMovil")
const navLabel = document.querySelector("#navLabel")
const iconClose = document.querySelector("#iconClose")
const contentClose = document.querySelector("#contentClose")


company.addEventListener("click",()=>{
    company.classList.toggle("activeMenuTop")
})

feature.addEventListener("click",()=>{
    feature.classList.toggle("activeMenuTop")
})

navMenuMovil.addEventListener("click",()=>{
    navLabel.classList.toggle("activeMenuMovil")
    contentClose.classList.add("activeContentClose")
})

iconClose.addEventListener("click",()=>{
    navLabel.classList.remove("activeMenuMovil")
    contentClose.classList.remove("activeContentClose")
})
contentClose.addEventListener("click",()=>{
    navLabel.classList.remove("activeMenuMovil")
    contentClose.classList.remove("activeContentClose")
})