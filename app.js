let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = function() {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}


let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = function() {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = function() {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}


window.onscroll = function() {
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}
