window.addEventListener("load", event => {
    var loading = document.querySelectorAll('.loading');
    for (i = 0; i < loading.length; i++){
        loading[i].classList.remove('loading');
    }
});
