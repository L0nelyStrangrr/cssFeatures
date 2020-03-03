document.querySelector('.menu__btn').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('menu__btn-active');
    document.querySelector('.menu__nav').classList.toggle('menu__nav-active')
})