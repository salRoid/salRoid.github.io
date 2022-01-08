window.addEventListener("load", event => {
    var image = document.querySelectorAll('.banner_container');
    for (i = 0; i < image.length; i++){
        image[i].classList.remove('loading');
    }
});

window.addEventListener("load", event => {
    var image = document.querySelector('.card_profile');
    image.classList.remove('loading');
});